import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      user {
        _id,
        userName,
        firstName,
        photo
      }
    }
  }
`

export const GET_USER = gql`
  query getUser {
    getUser {
      userName,
      firstName,
      photo,
      _id
    }
  }
`