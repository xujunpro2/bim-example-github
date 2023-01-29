import Vue from 'vue'
import Router from 'vue-router'
import {constantRoutes} from './routerMap'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress设置
Vue.use(Router)


//创建默认路由
const createRouter = () => new Router({
    //mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

/** next('xxx')是会继续跳转动作，即继续触发钩子，只有next()才会结束跳转动作 
 * 如果当前在A上跳转到A，vue是不会跳转的，也就不会触发afterEach，所以要NProgress.done()关闭进度条
*/
router.beforeEach(async (to, from, next) => {
  NProgress.start() ;
  next();
 
})

router.afterEach(() => {
  NProgress.done()
})


export default router
