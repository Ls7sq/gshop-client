/*
ajax请求函数模块
返回值为 promise对象(异步返回的数据是 response.data)
*/
import axios from 'axios'

export default function ajax(url, data={}, type='GET'){

    return new Promise(function(resolve, reject){
        //执行ajax请求
        let promise
        if (type === 'GET') {
            //准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送get请求
            promise = axios.get(url)
        }else{
            //发送post请求
            promise = axios.post(url, data)
        }
        
        promise.then(function(response){
            //成功调用resolve()
            resolve(response.data)
        }).catch(function(error){
            //失败调用reject()
            reject(error)
        })
    })
}
/**
 * const response = await ajax()
 * const result = reponse.data
 * 
 * 而现在是直接
 * const result = await ajax() 通过外面在套一层promise对象，从而返还的是response.data而不再是response
 */