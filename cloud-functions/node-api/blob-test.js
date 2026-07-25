import { getStore } from "@edgeone/pages-blob";

async function handleRequest() {
  try {
    const store = getStore("nanyin-data");
    await store.set("health/node-hello.txt", "Hello from Cloud Functions + Blob!");
    const content = await store.get("health/node-hello.txt", { consistency: "strong" });
    return new Response(content || "empty", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Cloud Blob test failed",
      message: error.message,
      name: error.name,
      code: error.code || ""
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  }
}

export async function onRequest() {
  return handleRequest();
}

export default handleRequest;
