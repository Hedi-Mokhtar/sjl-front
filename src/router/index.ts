import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import TeamsView from '../views/TeamsView.vue'
import PrenationalFeminine from '@/views/teams/PrenationalFeminine.vue'
import SubscriptionView from '@/views/SubscriptionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/teams', name: 'teams', component: TeamsView },
    { path: '/schedule', name: 'schedule', component: ScheduleView },
    { path: '/subscription', name: 'subscription', component: SubscriptionView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/teams/prenational-fem', name: 'prenational-fem', component: PrenationalFeminine }
  ],
})

export default router
