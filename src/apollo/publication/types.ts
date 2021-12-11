import { gql } from '@apollo/client';
import { PUBLICATION_FRAGMENT } from './fragment';

export const CREATE_PUBLICATION = gql`
  mutation createPublication($media: String!, $description: String!) {
    createPublication(media: $media, description: $description) {
      ...publicationFragment
    }
  }
  ${PUBLICATION_FRAGMENT}
`

export const GET_PUBLICATIONS = gql`
  query getPublications($limit: Int!, $page: Int!) {
    getPublications(limit: $limit, page: $page) {
      ...publicationFragment
    }
  }
  ${PUBLICATION_FRAGMENT}
`

export const GET_SHORT_PUBLICATIONS = gql`
  query getShortPublications($limit: Int!, $page: Int!, $userName: String!) {
    getShortPublications(limit: $limit, page: $page, userName:  $userName) {
      _id
      description,
      media
    }
  }
`

export const GET_PUBLICATION = gql`
  query getPublication($publicationId: ID!) {
    getPublication(publicationId: $publicationId) {
      ...publicationFragment
    }
  }
  ${PUBLICATION_FRAGMENT}
`
