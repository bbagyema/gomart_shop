import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            components:Home

        },
        {
            path:'/login',
            name:'Login',
            components:Login
        }
    ]
})