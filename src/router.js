import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	base: process.env.base,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
	],
});
