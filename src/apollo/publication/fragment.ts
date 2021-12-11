import { gql } from '@apollo/client';

export const PUBLICATION_FRAGMENT = gql`
  fragment publicationFragment on Publication {
    _id,
    status,
    description,
    media,
    createdBy {
      _id,
      email,
      userName,
      firstName,
      lastName,
      photo
    }
  }
`