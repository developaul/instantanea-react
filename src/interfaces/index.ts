import { QueryResult } from '@apollo/client';
import { LazyExoticComponent } from 'react';

export type JSXComponent = () => JSX.Element

export interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  isPrivate: boolean,
  FallBack: LazyExoticComponent<JSXComponent> | JSXComponent
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

export interface Profile {
  currentUserIsFollowing: boolean
  description?: string
  email: string
  firstName: string
  followers?: number
  following?: number
  lastName: string
  photo?: string
  userName: string
  _id: string
}

export interface ShortProfile extends User {
  currentUserIsFollowing: boolean
}

export interface PostCreationState {
  media: File | null,
  urlMedia: string | ArrayBuffer | null,
  description: string,
  view: string
}

export interface Publication {
  _id: string
  status: string
  createdBy: User
  media: string
  description: string,
  currentUserLikes: boolean,
  createdAt: string,
  likes: PublicationLike[]
}

export interface PublicationLike {
  _id: string
  createdBy: User
  publicationId: String
}

export interface ProfileParams {
  userName: string
}

export interface Pagination {
  limit: number,
  page: number,
  totalPages: number,
  nextPage: number,
  prevPage: number,
  hasPrevPage: boolean,
  hasNextPage: boolean
}

export interface PublicationsPagination {
  docs: Publication[],
  info: Pagination
}

export interface CustomQueryResult<T> extends QueryResult<T> {
  customFetchMore: (variables: any) => void
}
