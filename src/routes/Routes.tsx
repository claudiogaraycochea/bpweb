/* Pages */
// import ErrorPage from '../containers/errorPage/ErrorPage';
import IRoute from '../models/route';

import Home from '../pages/private/home/Home';
import About from '../pages/private/about/About';

// import MovieDetail from '../containers/movie/detail/MovieDetailContainer';
// import StyleGuide from '../rakutenUI/styleGuide/StyleGuide';

/* Layouts */
import PublicLayout from '../layouts/PublicLayout';

export const routes: IRoute[] = [
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