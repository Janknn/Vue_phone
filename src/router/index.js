import { createRouter, createWebHashHistory } from 'vue-router'
import CallsView from '../views/CallsView.vue'
import ContactsView from '../views/ContactsView.vue'
import KeyboardView from '../views/KeyboardView.vue'

const routes = [
  {
    path: '/Callsview',
    name: 'calls',
    component: CallsView
  },
  {
    path: '/ContactsView',
    name: 'contatcs',
    component: ContactsView,
  },
  {
    path: '/KeyboardView',
    name: 'keyboard',
    component: KeyboardView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
