import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login/Login.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../components/index/Index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../components/home/Home.vue')
        },
        {
          path: '/goodsAdd',
          name: 'goodsAdd',
          component: () => import('../components/goodsAdd/GoodsAdd.vue')
        },
        {
          path: '/searchGoods',
          name: 'searchGoods',
          component: () => import('../components/searchGoods/SearchGoods.vue')
        },
        {
          path: '/saleStatistics',
          name: 'saleStatistics',
          component: () => import('../components/saleStatistics/SaleStatistics.vue')
        },
        {
          path: '/returnStatistics',
          name: 'returnStatistics',
          component: () => import('../components/returnStatistics/ReturnStatistics.vue')
        },
        {
          path: '/accontManagement',
          name: 'accontManagement',
          component: () => import('../components/accontManagement/AccontManagement.vue')
        },
        {
          path: '/accontAdd',
          name: 'accontAdd',
          component: () => import('../components/accontAdd/AccontAdd.vue')
        },
        {
          path: '/passwordModify',
          name: 'passwordModify',
          component: () => import('../components/passwordModify/PasswordModify.vue')
        }
      ]
    }
  ]
})
