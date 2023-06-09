import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import ColdOpen from '@/views/ColdOpen.vue'
import ComponentRack from '@/views/ComponentRack.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cold'
  },
  // {
  //   path: '/rack/',
  //   component: ComponentRack
  // },
  {
    path: '/cold/',
    component: ColdOpen
  },
  // {
  //   path: '/article/',
  //   component: ArticleView
  // },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/TopicTab.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/ToolTab.vue')
      },
      {
        path: '/rack/',
        component: ComponentRack
      },
      // {
      //   path: 'tab4',
      //   component: () => import('@/views/Tab4Page.vue')
      // },
      // {
      //   path: 'tab5',
      //   component: () => import('@/views/Tab5Page.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
