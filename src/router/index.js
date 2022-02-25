import {createRouter,createWebHistory} from "vue-router";
import Registration from "@/views/Registration";
import Login from "@/views/Login";
import GlobalFeed from "@/views/GlobalFeed";
import YourFeed from "@/views/YourFeed";
import TagFeed from "@/views/TagFeed";

const  routes =[
	{path:'/',name:'globalFeed',component:GlobalFeed},
	{path:'/register',name:'register',component:Registration},
	{path: '/login',name: 'login',component: Login},
	{path: '/settings',name: 'settings',component: GlobalFeed},
	{path: '/user/:slug',name: 'userProfile',component: GlobalFeed},
	{path: '/feed',name: 'yourFeed',component: YourFeed},
	{path: '/tags/:slug',name: 'tag',component: TagFeed},
	{path: '/articles/new',name: 'createArticle',component: GlobalFeed},
	{path: '/articles/:slug',name: 'article',component: GlobalFeed},
	{path: '/articles/:slug/edit',name: 'editArticle',component: GlobalFeed},

]
const router= createRouter({routes,history:createWebHistory()})
export default router
