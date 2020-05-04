import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	base: process.env.base,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
			meta: { requiresAuth: true },
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/about",
			name: "about",
			component: About,
			beforeEnter: (to, from, next) => {
				next({ path: "/login", query: { redirect: to.fullPath } });
			},
		},
	],
});
