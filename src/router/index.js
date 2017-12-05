import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('../view/Login')
const Page = () => import('../view/Page')
// const HelloWorld = () => import('../components/HelloWorld')

Vue.use(Router)

const routesMap = [
  // { path: '/', component: HelloWorld, name: 'HelloWorld' },
  { path: '/', component: Page, name: 'Page' },
  { path: '/login', component: Login, name: 'Login' }
]

export const router = new Router({
  mode: 'history',
  routes: routesMap
})
