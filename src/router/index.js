import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Blog from "../views/Blog";
import Cart from "../views/Cart";
import Events from "../views/events/Events";
import Feature from "../views/Feature";
import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import Shop from "../views/shop/Shop";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/events",
    name: "events",
    component: Events,
  },
  {
    path: "/features",
    name: "Features",
    component: Feature,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/cart",
    name: Cart,
    component: Cart,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
