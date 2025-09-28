import { defineStore } from "pinia";
export const useNavigation = defineStore("navigation", {
  state: () => ({
    legal: [
      { id: "privacy-policy", name: "legal.privacy.name", path: "legal.privacy.path" },
      { id: "regulations", name: "legal.regulations.name", path: "legal.regulations.path" },
    ],
    nav: [
      { name: "header.nav.dnf.name", path: "header.nav.dnf.path" },
      { name: "header.nav.effects.name", path: "header.nav.effects.path" },
      { name: "header.nav.reviews.name", path: "header.nav.reviews.path" },
      { name: "header.nav.contact.name", path: "header.nav.contact.path" },
    ],
    langPanelIsOpen: false,
    navPanelIsOpen: false,
  }),
  getters: {

  },
  actions: {
    setLangPanel(value: Boolean) {
      this.langPanelIsOpen = value;
    },
    setNavPanel(value: Boolean) {
      this.navPanelIsOpen = value;
    },
    setBothPanels(value: Boolean) {
      this.navPanelIsOpen = value;
      this.langPanelIsOpen = value;
    },
    toggleNavPanel() {
      this.navPanelIsOpen = !this.navPanelIsOpen;
    },
    toggleLangPanel() {
      this.langPanelIsOpen = !this.langPanelIsOpen;
    },
    setBroswerLang(value: String) {
      this.broswerLang = value;
    },
  }
});
