/*
 *通过mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutation-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings
} from '../api'

export default{
    //异步获取地址
    async getAddress({commit, state}){
        //发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },

    //异步获取食品分类列表
    async getCategorys({commit}){
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        //提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },

    //异步获取商家列表
    async getShops({commit, state}){
        //发送异步ajax请求
        const {longitude, latitude} = state
        const result = await reqShops(longitude, latitude)
        //提交一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },

    //由于在登陆时候已经发送过请求，因此手中已经有了user的数据，所以方法用同步。没有的话就必须先去后台获取，再做记录
    //同步记录用户信息
    recordUser({commit}, userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },

    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },

    //异步登出
    async logout({commit}){
        const result = await reqLogout()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },

    //异步获取商家信息
    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    //异步获取商家评价列表
    async getShopRatings({commit},callback){
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings})
            //此时数据已经更新了,通知组件
            callback && callback()
        }
    },
    //异步获取商家商品列表
    async getShopGoods({commit}, callback){
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
        //此时数据已经更新了,通知组件
        callback && callback()
        }
    },
    //同步action，更新food中的count数量
    updateFoodCount({commit},{isAdd,food}){
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    }


    // action中第一个参数是context
    // context的对象包含以下属性:
    // {
    //     state,
    //     rootState,
    //     commit,
    //     dispatch,
    //     getters
    // }
}