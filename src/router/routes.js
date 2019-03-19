import LoginPage from 'pages/Login';
import User from 'layouts/User';
import Profile from 'pages/Profile';
import Posts from 'pages/Posts';
import auth from '../services/auth/index';

const routes = [
  {
    path: '/login',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: LoginPage },
      {
        path: '/logout',
        component: () => {
          auth.logout();
        },
      },
      {
        path: '/recuperar-senha',
        component: LoginPage,
      },
    ],
  },
  {
    path: '',
    component: User,
  },
  {
    path: '/user',
    component: User,
    children: [
      { path: 'perfil', component: Profile },
      { path: 'posts', component: Posts },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
