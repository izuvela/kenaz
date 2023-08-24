import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "./screens/HomeScreen.vue";
import CategoryScreen from "./screens/CategoryScreen.vue";
import SingleScreen from "./screens/SingleScreen.vue";
import { createPinia } from "pinia";

const routes = [
  { name: "Home", path: "/", component: HomeScreen },
  { name: "Category", path: "/category", component: CategoryScreen },
  { name: "Single", path: "/single", component: SingleScreen },
];

const router = createRouter({
  history: createWebHistory("/kenaz/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
