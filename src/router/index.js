/* 
路由器对象模块
*/
import VueRouter from 'vue-router'
import Vue from 'vue'


import MSite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'hash',
    //所有路由
    routes:[
        {
            path:'/msite',
            component: MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component: Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})