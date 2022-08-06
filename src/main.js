import { createApp } from "vue";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./theme.css";
createApp(App).use(VueCookies).use(store).mount("#app");
