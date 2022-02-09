import {createRouter,createWebHistory} from "vue-router";
import App from "@/App";
import Registration from "@/views/Registration";
import Login from "@/views/Login";

const  routes =[
	{path:'/',name:'Home',component:App},
	{path:'/register',name:'register',component:Registration},
	{path: '/login',name: 'login',component: Login},
	{path: '/create-article',name: 'createArticle',component: Login},
	{path: '/settings',name: 'settings',component: Login},
	{path: '/user/slug',name: 'userProfile',component: Login}
]
const router= createRouter({routes,history:createWebHistory()})
export default router
