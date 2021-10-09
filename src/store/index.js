import { createStore } from "vuex";
import client from "./module/Homemodule/client";
import homeT from "./module/Homemodule/homeT";
import navbar from "./module/Homemodule/navbar";
import productbox from "./module/Homemodule/productbox";
import slider from "./module/Homemodule/slider";
import team from "./module/Homemodule/team";
import shopdeatils from "./module/Shopmodule/shopdeatils";

export default createStore({
  modules: {
    team,
    slider,
    navbar,
    homeT,
    client,
    shopdeatils,
    productbox,
  },
});
