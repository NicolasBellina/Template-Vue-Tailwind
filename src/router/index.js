import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Erreur404 from '../views/Erreur404.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Erreur404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
