/* Pages */
// import ErrorPage from '../containers/errorPage/ErrorPage';
import IRoute from '../models/route';

import Home from '../pages/public/home/Home';
import About from '../pages/private/about/About';
import Login from '../pages/auth/login/Login';

import StyleGuide from '../ui/styleGuide/StyleGuide';

import Dashboard from '../pages/private/dashboard/Dashboard';
import Realtime from '../pages/private/realtime/Realtime';

// import MovieDetail from '../containers/movie/detail/MovieDetailContainer';
// import StyleGuide from '../rakutenUI/styleGuide/StyleGuide';

/* Layouts */
import PublicLayout from '../layouts/publicLayout/PublicLayout';
// import PrivateLayout from '../layouts/privateLayout/PrivateLayout';
import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout';

export const routes: IRoute[] = [
  {
    path: '/style',
    name: 'StyleGuide',
    component: StyleGuide,
    layout: DashboardLayout,
    exact: true
  },
  {
    path: '/',
    name: 'Home Page',
    component: Home,
    layout: PublicLayout,
    exact: true
  },
  {
    path: '/about',
    name: 'About Page',
    component: About,
    layout: PublicLayout,
    exact: true
  },
  {
    path: '/about/:number',
    name: 'About Page',
    component: About,
    layout: PublicLayout,
    exact: true
  },
  {
    path: '/realtime',
    name: 'Realtime',
    component: Realtime,
    layout: DashboardLayout,
    exact: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    layout: DashboardLayout,
    exact: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: PublicLayout,
    exact: true
  },
]

export default routes;

/*
export const routes:  = [
  {
    id: 4,
    exact: true,
    path: '/styleGuide',
    Component: StyleGuide,
    Layout: PublicLayout,
    Access: 'Public',
  },
  {
    id: 3,
    exact: true,
    path: '/movie',
    Component: MovieDetail,
    Layout: PublicLayout,
    Access: 'Public',
  },
{
  id: 1,
    exact: true,
      path: '/',
        Component: Home,
          Layout: PublicLayout,
            Access: 'Public',
  },
  {
    id: 0,
    exact: true,
    path: '*',
    Component: ErrorPage,
    Layout: PublicLayout,
    Access: 'Public',
  },
];*/