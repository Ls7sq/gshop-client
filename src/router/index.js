/* 
路由器对象模块
*/
import VueRouter from 'vue-router'
import Vue from 'vue'


import MSite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'hash',
    //所有路由
    routes:[
        {
            path:'/msite',
            component: MSite
        },
        {
            path:'/search',
            component: Search
        },
        {
            path:'/order',
            component: Order
        },
        {
            path:'/profile',
            component: Profile
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})