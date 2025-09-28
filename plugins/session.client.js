import { v4 as uuidv4 } from "uuid";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    const currentTs = Math.floor(Date.now() / 1000);
    if (
      localStorage.getItem("session-id") === null ||
      localStorage.getItem("expiry-ts") === null ||
      currentTs > parseInt(localStorage.getItem("expiry-ts"), 10)
    ) {
      localStorage.setItem("session-id", uuidv4());
    }
    localStorage.setItem("expiry-ts", currentTs + 2629746);
    nuxtApp.provide("sessionId", localStorage.getItem("session-id"));
  });
});
