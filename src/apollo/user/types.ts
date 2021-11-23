import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token,
      user {
        _id,
        userName,
        firstName,
        lastName,
        photo
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!,
    $userName: String!,
    $firstName: String!,
    $lastName: String!,
    $password: String!
  ) {
    createUser(
      email: $email,
      userName: $userName,
      firstName: $firstName,
      lastName: $lastName,
      password: $password
    ) {
      token,
      user {
        _id,
        userName,
        firstName,
        lastName,
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
      lastName,
      photo,
      _id
    }
  }
`

export const GET_USER_BY_USERNAME = gql`
  query getUserByUserName($userName: String!) {
    getUserByUserName(userName: $userName) {
      _id,
      email,
      userName,
      firstName,
      lastName,
      description,
      photo,
      followers,
      following,
      currentUserIsFollowing
    }
  }

`
