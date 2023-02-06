import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ButtonGoogle from "@/components/ButtonGoogle.vue";
import InputPassword from "./components/InputPassword.vue";
import InputText from "./components/InputText.vue";

import "@/assets/css/style.bundle.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app
  .component("ButtonGoogle", ButtonGoogle)
  .component("InputText", InputText)
  .component("InputPassword", InputPassword);

app.mount("#app");
