import { getStore } from "@edgeone/pages-blob";

const stateKey = "shared-state.json";

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
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

async function readState(store) {
  const saved = await store.get(stateKey, { type: "json", consistency: "strong" });
  return {
    ...emptyState,
    ...(saved || {})
  };
}

async function writeState(store, state) {
  const nextState = {
    ...emptyState,
    ...state,
    updatedAt: new Date().toISOString()
  };
  await store.setJSON(stateKey, nextState, { cacheControl: "no-store" });
  return nextState;
}

async function handleRequest(context) {
  const { request } = context;

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const store = getStore("nanyin-data");
    const { bucket, key, amount = 1 } = await request.json();
    if (!["likes", "songStars", "singerReactions"].includes(bucket) || typeof key !== "string" || !key) {
      return json({ error: "Invalid increment target" }, 400);
    }
    const current = await readState(store);
    const nextBucket = { ...(current[bucket] || {}) };
    nextBucket[key] = Math.max(0, Number(nextBucket[key] || 0) + Number(amount || 1));
    const nextState = await writeState(store, {
      ...current,
      [bucket]: nextBucket
    });
    return json({ bucket, key, value: nextBucket[key], state: nextState });
  } catch (error) {
    return json({
      error: "EdgeOne Blob increment API error",
      message: error.message,
      name: error.name,
      code: error.code || ""
    }, 500);
  }
}

export async function onRequest(context) {
  return handleRequest(context);
}

export default handleRequest;
