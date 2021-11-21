import { LazyExoticComponent } from 'react';

export type JSXComponent = () => JSX.Element

export interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  isPrivate: boolean
}

export interface MenuItem {
  _id: string
  label: string
}

export interface ShortPublication {
  _id: string
  media: string
  title: string
}

export enum FormFooterTypes {
  login = 'login',
  register = 'register'
}

export interface User {
  _id: string
  userName: string
  firstName: string
  lastName: string
  photo?: string
}