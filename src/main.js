import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import RegistrationForm from './components/RegistrationForm.vue'

const routes = [
  { path: '/', component: LogIn },
  { path: '/registration', component: RegistrationForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
    .use(router)
    .mount('#app')
