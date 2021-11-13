import { lazy, LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const Home = lazy(() => import( /* webpackChunkName: "Home" */ '../pages/Home'))

export const routes: Route[] = [
  {
    path: '/',
    Component: Home,
  }
]