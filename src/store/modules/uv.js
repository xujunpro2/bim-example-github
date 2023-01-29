
import {constantRoutes} from '@/router/routerMap'

//可以通过this.$store.state.uv.XX操作
const state = {
    userId:-1,//用户ID
    username: 'bimi', //用户名
    rule:null,
    avatar: '', //头像
    myRouter: constantRoutes, //路由
    pageSize:10, //个性化设置
}

//getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
const getters = {
    username: state => {
        return state.username;
    },
    currentRouter: state => {
        return state.myRouter;
    }
}


//mutations是暴露给外部通过this.$store.commit调用改变store的接口,注意必须是同步函数
const mutations = {
   
}

const actions = {
  
}




export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}