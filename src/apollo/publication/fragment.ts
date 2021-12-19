import { gql } from '@apollo/client';
import { PUBLICATION_LIKE_USER_FRAGMENT } from '../publicationLike/fragment';

export const PUBLICATION_FRAGMENT = gql`
  fragment publicationFragment on Publication {
    _id,
    status,
    description,
    media,
    currentUserLikes,
    createdAt
    likes {
      _id,
      createdBy {
        ...publicationLikeUserFragment
      }
    },
    createdBy {
      _id,
      email,
      userName,
      firstName,
      lastName,
      photo
    }
  }
  ${PUBLICATION_LIKE_USER_FRAGMENT}
`