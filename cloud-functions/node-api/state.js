import { getStore } from "@edgeone/pages-blob";

const stateKey = "shared-state.json";

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

  try {
    const store = getStore("nanyin-data");

    if (request.method === "GET") {
      return json(await readState(store));
    }

    if (request.method === "PUT") {
      const incoming = await request.json();
      return json(await writeState(store, incoming));
    }

    if (request.method === "POST") {
      const patch = await request.json();
      const current = await readState(store);
      return json(await writeState(store, { ...current, ...patch }));
    }

    return json({ error: "Method not allowed" }, 405);
  } catch (error) {
    return json({
      error: "Cloud Blob API error",
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
