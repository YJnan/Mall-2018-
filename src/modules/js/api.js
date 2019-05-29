let url = {
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    addCart:'/cart/add',
    cartLists: '/cart/list',
    cartReduce: '/cart/reduce',
    cartRemove: '/cart/remove',
    cartMremove:'/cart/mremove',
    cartUpdate: '/cart/update',
    addressLists: '/address/list',
    addressAdd: '/address/add',
    addressRemove: '/address/remove',
    addressUpdate: '/address/update',
    addressSetDefault: '/address/setDefault'
}

//开发环境和真实环境的切换
// let host = ''
let host = 'https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan'

for(let key in url ){
    if(url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}

export default url