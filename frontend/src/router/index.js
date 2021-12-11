import Vue from 'vue'
import VueRouter from 'vue-router'


import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Catalog from '../views/Catalog.vue'
import Checkout from '../views/Checkout.vue'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Product from '../views/Product.vue'
import Profile from '../views/Profile.vue'
import Sales from '../views/Sales.vue'
import Settings from '../views/Settings.vue'
import Showcase from '../views/Showcase.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },

  {
    path: '/catalog/:url',
    name: 'Product',
    component: Product
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },

  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/sales',
    name: 'Sales',
    component: Sales
  },

  {
    path: '/showcase',
    name: 'Showcase',
    component: Showcase
  },

  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
