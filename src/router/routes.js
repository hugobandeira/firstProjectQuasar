import LoginPage from 'pages/Login';
import User from 'layouts/User';
import Profile from 'pages/Profile';
import Posts from 'pages/Posts';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: LoginPage },
    ],
  },
  {
    path: '/user',
    component: User,
    children: [
      { path: 'profile', component: Profile },
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
