import { gql } from '@apollo/client'

export const PUBLICATION_LIKE_USER_FRAGMENT = gql`
  fragment publicationLikeUserFragment on User {
    _id,
    userName
  }
`

export const PUBLICATION_LIKE_FRAGMENT = gql`
  fragment publicationLikeFragment on PublicationLike {
    _id,
    createdBy {
      ...publicationLikeUserFragment
    },
    publicationId
  }
  ${PUBLICATION_LIKE_USER_FRAGMENT}
`