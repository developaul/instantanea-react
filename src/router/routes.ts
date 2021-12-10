import { lazy } from "react"

import LoginFallBack from "../components/LoginFallBack"
import RegisterFallBack from "../components/RegisterFallBack"

import { Route } from '../interfaces'

const Home = lazy(() => import( /* webpackChunkName: "Home" */ '../pages/Home'))
const Profile = lazy(() => import( /* webpackChunkName: "Profile" */ '../pages/User'))
const Login = lazy(() => import( /* webpackChunkName: "Login" */ '../pages/Login'))
const Register = lazy(() => import( /* webpackChunkName: "Register" */ '../pages/Register'))

export const routes: Route[] = [
  {
    path: '/',
    Component: Home,
    isPrivate: true,
    FallBack: LoginFallBack
  },
  {
    path: '/:userName',
    Component: Profile,
    isPrivate: true,
    FallBack: LoginFallBack
  },
  {
    path: '/accounts/login',
    Component: Login,
    isPrivate: false,
    FallBack: LoginFallBack
  },
  {
    path: '/accounts/register',
    Component: Register,
    isPrivate: false,
    FallBack: RegisterFallBack
  }
]