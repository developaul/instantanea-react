import { gql } from '@apollo/client'

import { PUBLICATION_LIKE_FRAGMENT } from './fragment'

export const CREATE_PUBLICATION_LIKE = gql`
  mutation createPublicationLike($publicationId: ID!) {
    createPublicationLike(publicationId: $publicationId) {
      ...publicationLikeFragment
    }
  }
  ${PUBLICATION_LIKE_FRAGMENT}
`

export const REMOVE_PUBLICATION_LIKE = gql`
  mutation removePublicationLike($publicationId: ID!) {
    removePublicationLike(publicationId: $publicationId) {
      ...publicationLikeFragment
    }
  }
  ${PUBLICATION_LIKE_FRAGMENT}
`