import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

function fetch(url,data){
    return new Promise((resolve,reject) => {
            axios.get(url,data).then(res => {
            let status = res.data.status
            // if(status === 200){
            //     resolve(res)
            // }
            // if(status === 300){
            //  loaction.href = 'login.html'
            //  resolve(res)
            // }
            // reject(res)

            resolve(res)
        }).catch(error => {
            reject(error)
        }) 
    })
}


export default fetch