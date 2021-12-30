import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from "pinia";


const app = createApp(App);
app.use(store);
app.use(router);
app.use(createPinia());
// app.use(Toaster);
// console.log("sS",Toaster);
app.mount("#app");
