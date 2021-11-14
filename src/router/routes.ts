import { lazy } from "react"

import { Route } from '../interfaces';

const Home = lazy(() => import( /* webpackChunkName: "Home" */ '../pages/Home'))

export const routes: Route[] = [
  {
    path: '/',
    Component: Home,
  }
]