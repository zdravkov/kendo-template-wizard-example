import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Blank1 from "../components/Blank1";
import Grid2 from "../components/Grid2";
import Form1 from "../components/Form1";
import Grid1 from "../components/Grid1";
import Chart1 from "../components/Chart1";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
    ,{
      path: "/Blank1",
      name: "Blank1",
      component: Blank1
    }
    ,{
      path: "/Grid2",
      name: "Grid2",
      component: Grid2
    }
    ,{
      path: "/Form1",
      name: "Form1",
      component: Form1
    }
    ,{
      path: "/Grid1",
      name: "Grid1",
      component: Grid1
    }
    ,{
      path: "/Chart1",
      name: "Chart1",
      component: Chart1
    }
  ]
});
