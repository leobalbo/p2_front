import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import CartView from "../views/CartView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";

const routes = [
	{ path: "/", name: "Home", component: HomeView },
	{ path: "/cart", name: "Cart", component: CartView },
	{
		path: '/products/:category',
		name: 'CatalogView',
		component: CatalogView
	},
	{
		path: '/product/:id',
		name: 'ProductDetails',
		component: ProductDetailsView
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;