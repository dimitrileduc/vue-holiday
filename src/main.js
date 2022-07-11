import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/main.css";

import mitt from "mitt";
import {dragscrollNext} from "vue-dragscroll";

const emitter = mitt();
const app = createApp(App);

app.directive("dragscroll", dragscrollNext);
app.config.globalProperties.emitter = emitter;
app.use(store)

    .use(router)
    .mount("#app");
