const stateKey = "shared-state";

const emptyState = {
  likes: {},
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

export async function onRequest(context) {
  const { request, env } = context;

  if (!env.NANYIN_KV) {
    return json({ error: "Missing KV binding: NANYIN_KV" }, 500);
  }
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const { bucket, key, amount = 1 } = await request.json();
    if (!["likes", "singerReactions"].includes(bucket) || typeof key !== "string" || !key) {
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
      error: "Cloudflare KV increment API error",
      message: error.message,
      name: error.name
    }, 500);
  }
}
