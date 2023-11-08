import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import AdminLogIn from './components/AdminLogIn.vue'
import AdminPortal from './components/AdminPortal.vue'
import './assets/global-styles.scss'


const routes = [
  { path: '/', component: LogIn },
  { path: '/registration', component: RegistrationForm },
  { path: '/admin', component: AdminLogIn },
  { path: '/admin-portal', component: AdminPortal },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
    .use(router)
    .mount('#app')
