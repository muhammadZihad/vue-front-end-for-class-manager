import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Empty from "./components/EmptyRoom";
import Routine from "./components/Routine";

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
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/routine",
			name: "routine",
			component: Routine,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "/emptyroom",
			name: "emptyroom",
			component: Empty,
		},
	],
});
