import { gql } from '@apollo/client'

export const CREATE_FOLLOWER = gql`
  mutation createFollower($followeeId: ID!) {
    createFollower(followeeId: $followeeId)
  }
`
