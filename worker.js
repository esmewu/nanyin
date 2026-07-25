const stateKey = "shared-state";

const emptyState = {
  likes: {},
  singerReactions: {},
  debts: [],
  pinnedSongs: {},
  customSongs: [],
  schedules: {},
  tags: {}
};

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

async function readState(env) {
  const saved = await env.NANYIN_KV.get(stateKey, "json");
  return {
    ...emptyState,
    ...(saved || {})
  };
}

async function writeState(env, state) {
  const nextState = {
    ...emptyState,
    ...state,
    updatedAt: new Date().toISOString()
  };
  await env.NANYIN_KV.put(stateKey, JSON.stringify(nextState));
  return nextState;
}

async function handleStateApi(request, env) {
  if (!env.NANYIN_KV) {
    return json({ error: "Missing KV binding: NANYIN_KV" }, 500);
  }

  try {
    if (request.method === "GET") {
      return json(await readState(env));
    }

    if (request.method === "PUT") {
      const incoming = await request.json();
      return json(await writeState(env, incoming));
    }

    if (request.method === "POST") {
      const patch = await request.json();
      const current = await readState(env);
      return json(await writeState(env, { ...current, ...patch }));
    }

    return json({ error: "Method not allowed" }, 405);
  } catch (error) {
    return json({
      error: "Cloudflare Worker KV API error",
      message: error.message,
      name: error.name
    }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/state") {
      return handleStateApi(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};
