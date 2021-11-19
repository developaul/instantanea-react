import { lazy } from "react"

import { Route } from '../interfaces';

const Home = lazy(() => import( /* webpackChunkName: "Home" */ '../pages/Home'))
const User = lazy(() => import( /* webpackChunkName: "Home" */ '../pages/User'))

export const routes: Route[] = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/:userName',
    Component: User
  }
]