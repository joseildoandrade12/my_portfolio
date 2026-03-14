import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home',
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      alias: '/sobre',
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      alias: '/projetos',
    },
    {
      path: '/projects/post/:id',
      name: 'post',
      component: () => import('../views/PostView.vue'),
      alias: '/projetos/post/:id',
      props: true
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/404/NotFoundView.vue'),
    },
  ],
});

export default router;
