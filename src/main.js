// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import axios from 'axios'
// eslint-disable-next-line import/no-duplicates
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// eslint-disable-next-line import/no-duplicates
import { Message } from 'element-ui'

// 引入公用样式
import './styles/common.less'
import App from './App'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 设置路由拦截
router.beforeEach((to, from, next) => {
  // 获取token
  const token = window.localStorage.getItem('token')
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      Message.error('请登录后再做操作')
      return next({path: '/login'})
    }
  }
})
// 设置全局过滤器
Vue.filter('dateFmt', (input, formatString = 'YYYY-MM-DD') => {
  return moment(input).format(formatString)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
