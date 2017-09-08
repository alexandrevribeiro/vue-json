import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Json from '@/components/Json'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/', name: 'json', component: Json }
  ]
})
