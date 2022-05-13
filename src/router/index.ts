import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TaskListPage from '../pages/TaskListPage.vue';
import CreatePage from '../pages/CreatePage.vue';
import CalendarPage from '../pages/CalendarPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'taskList',
    component: TaskListPage,
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePage,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
