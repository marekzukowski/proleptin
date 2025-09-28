export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    if (localStorage.getItem("source-url") === null) {
      localStorage.setItem("source-url", encodeURIComponent(window.location));
    }
    nuxtApp.provide(
      "url",
      decodeURIComponent(localStorage.getItem("source-url"))
    );
  });
});
