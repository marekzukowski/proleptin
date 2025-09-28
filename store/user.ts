import { defineStore } from "pinia";
export const useUser = defineStore("user", {
  state: () => ({
    sessionId: "",
    expiryTs: "",
    url: "",
  }),
  getters: {

  },
  actions: {
    getQuery() {
      const params = new URLSearchParams(this.url);
      return params.toString();
    },
    getBaseUrl() {
      const a = new URL(this.url)
      return a.protocol + "//" + a.host;
    }
  }
});
