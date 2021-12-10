import { gql } from '@apollo/client';

export const CREATE_PUBLICATION = gql`
  mutation createPublication($media: String!, $description: String!) {
    createPublication(media: $media, description: $description) {
      _id,
      status,
      media,
      description,
      createdBy {
        _id,
        email,
        userName,
        firstName,
        lastName,
        photo
      }
    }
  }
`

export const GET_PUBLICATIONS = gql`
  query getPublications($limit: Int!, $page: Int!) {
    getPublications(limit: $limit, page: $page) {
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
  }
`