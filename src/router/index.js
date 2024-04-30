import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResearchView from '../views/ResearchView.vue'
import OutreachView from '../views/OutreachView.vue'
import StudentInvolvementView from '@/views/StudentInvolvementView.vue'
import EventsView from '@/views/EventsView.vue'
import NewsView from '@/views/NewsView.vue'
import ContactView from '@/views/ContactView.vue'
import RoboticSolarTrackingSystemView from '@/views/Research/RoboticSolarTrackingSystemView.vue'
import LetterFromTheDirectorView from '@/views/About/LetterFromTheDirectorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/about/letterfromthedirector',
      name: 'letterfromthedirector',
      component: LetterFromTheDirectorView
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchView
    },
    {
      path: '/research/roboticsolartrackingsystem',
      name: 'roboticsolartrackingsystem',
      component: RoboticSolarTrackingSystemView
    },
    {
      path: '/studentinvolvement',
      name: 'studentinvolvement',
      component: StudentInvolvementView
    },
    {
      path: '/outreach',
      name: 'outreach',
      component: OutreachView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
