
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import ('../views/Home.vue')
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: () => import ('../views/Quiz.vue')
        }
        
    ],
})

export default router;