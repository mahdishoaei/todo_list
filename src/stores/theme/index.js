import { defineStore } from "pinia";

export const usethemeStore = defineStore("usethemeStore", {
  state: () => ({
    theme: "dark",
  }),
  actions: {
    changeThemeStatus() {
      switch (this.theme) {
        case "dark":
          this.theme = "light";
          break;
        case "light":
          this.theme = "dark";
          break;
      }
    },
  },
});
