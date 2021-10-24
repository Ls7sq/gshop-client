/* 入口JS */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import './filters/index'//加载过滤器即可
import './mock/mockServer' //加载mockServer即可
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload,{
    loading
})

//注册全局组件标签
Vue.component(Button.name, Button)//<mt-button>

new Vue({
    el:'#app',
    render:h => h(App),
    router, //使用上vue-router
    store, //使用上vuex
})