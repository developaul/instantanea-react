import { MutationHookOptions, useMutation } from "@apollo/client"

import { CREATE_FOLLOWER, REMOVE_FOLLOW } from "./types"
import { CreateFollowerArgs, RemoveFollowArgs } from "./interfaces"
import { GET_USER_BY_USERNAME } from "../user/types"
import { GetProfileByUserNameData } from "../user/interfaces"

export const useCreateFollower = ({ userName }: CreateFollowerArgs, params?: MutationHookOptions) =>
  useMutation(CREATE_FOLLOWER, {
    update: cache => {
      const { getUserByUserName } = cache.readQuery({ query: GET_USER_BY_USERNAME, variables: { userName } }) as GetProfileByUserNameData
      const { followers = 0 } = getUserByUserName

      cache.writeQuery({
        query: GET_USER_BY_USERNAME,
        data: {
          getUserByUserName: {
            ...getUserByUserName,
            currentUserIsFollowing: true,
            followers: followers + 1
          }
        },
        variables: {
          userName
        }
      })
    },
    ...params,
  })

export const useRemoveFollow = ({ userName }: RemoveFollowArgs, params?: MutationHookOptions) =>
  useMutation(REMOVE_FOLLOW, {
    update: cache => {
      const { getUserByUserName } = cache.readQuery({ query: GET_USER_BY_USERNAME, variables: { userName } }) as GetProfileByUserNameData
      const { followers = 0 } = getUserByUserName

      cache.writeQuery({
        query: GET_USER_BY_USERNAME,
        data: {
          getUserByUserName: {
            ...getUserByUserName,
            currentUserIsFollowing: false,
            followers: Math.max(followers - 1, 0)
          }
        },
        variables: {
          userName
        }
      })
    },
    ...params,
  })

