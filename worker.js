const stateKey = "shared-state";

const emptyState = {
  likes: {},
  songStars: {},
  singerReactions: {},
  debts: [],
  pinnedSongs: {},
  customSongs: [],
  schedules: {},
  tags: {},
  songEdits: {},
  deletedSongs: {},
  songRequests: []
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

async function handleIncrementApi(request, env) {
  if (!env.NANYIN_KV) {
    return json({ error: "Missing KV binding: NANYIN_KV" }, 500);
  }
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const { bucket, key, amount = 1 } = await request.json();
    if (!["likes", "songStars", "singerReactions"].includes(bucket) || typeof key !== "string" || !key) {
      return json({ error: "Invalid increment target" }, 400);
    }
    const current = await readState(env);
    const nextBucket = { ...(current[bucket] || {}) };
    nextBucket[key] = Math.max(0, Number(nextBucket[key] || 0) + Number(amount || 1));
    const nextState = await writeState(env, {
      ...current,
      [bucket]: nextBucket
    });
    return json({ bucket, key, value: nextBucket[key], state: nextState });
  } catch (error) {
    return json({
      error: "Cloudflare Worker increment API error",
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

    if (url.pathname === "/api/increment") {
      return handleIncrementApi(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};
