import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

export type RouteName = 'about' | 'play';

export type LinkName = 'discord' | 'github';

export function routeName(name: RouteName): string {
  return name;
}

export function getLinkPath(name: LinkName): string {
  switch (name) {
    case 'discord':
      return 'https://discord.gg/cwWns2fdXF';
    case 'github':
      return 'https://github.com/spacebake/loungeware';
    default:
      return '#';
  }
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: routeName('about'),
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/About/About.vue'),
  },
  {
    path: '/play',
    name: routeName('play'),
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/Play/Play.vue'),
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "errors" */ '../views/Errors/Error404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;