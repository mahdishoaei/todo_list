import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router.js";
import App from "./App.vue";
import "./assets/tailwind.css";

const app = createApp(App);
const pinia = createPinia();

app.mount("#app");
app.use(pinia);
app.use(router);
