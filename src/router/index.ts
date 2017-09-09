import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Json from '@/components/Json'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/json', name: 'json', component: Json }
  ]
})
