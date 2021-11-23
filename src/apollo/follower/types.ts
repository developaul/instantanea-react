import { gql } from '@apollo/client'

export const CREATE_FOLLOWER = gql`
  mutation createFollower($followeeId: ID!) {
    createFollower(followeeId: $followeeId) {
      followee
    }
  }
`

export const REMOVE_FOLLOW = gql`
  mutation removeFollow($followeeId: ID!) {
    removeFollow(followeeId: $followeeId) {
      followee
    }
  }
`