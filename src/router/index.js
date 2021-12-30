import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductBlock from '../components/ProductBlock.vue'
import Dashboard from '../views/Dashboard.vue'
import CartItem from '../components/cartItem.vue'
import CartData from '../views/CartData.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
    {
    path: '/cartitem',
    name: 'cartitem',
    component: CartItem
  },
  {
    path: '/cartitem/:id',
    name: 'cartitem',
    component: CartItem
  },
  {
    path: '/cartdata',
    name: 'cartdata',
    component: CartData
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
