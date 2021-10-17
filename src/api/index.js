/**
 * 包含 n 个接口请求函数的模块
 * 函数的返回值为 promise 对象
 */
import ajax from './ajax'
const BASE_URL = '/api'

//参数是params参数不是query参数. 不可写为 '/position/',{geohash}
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//获取食品分类列表
export const reqFoodCategorys = () => ajax(`${BASE_URL}/index_category`)
//参数为query类型，根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(`${BASE_URL}/shops`,{longitude,latitude})

