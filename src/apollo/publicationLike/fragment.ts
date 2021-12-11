import { gql } from '@apollo/client'

export const PUBLICATION_LIKE_FRAGMENT = gql`
  fragment publicationLikeFragment on PublicationLike {
    _id: ID,
    createdBy: ID,
    publicationId: ID
  }
`