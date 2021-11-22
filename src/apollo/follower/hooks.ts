import { MutationHookOptions, useMutation } from "@apollo/client"

import { CREATE_FOLLOWER } from "./types"

import { CreateFolloweeArgs } from "./interfaces"

export const useCreateFollower = (params?: MutationHookOptions) => {

  const [mutation, options] = useMutation(CREATE_FOLLOWER, params)

  const createFollower = (variables: CreateFolloweeArgs): void => {
    mutation({
      variables
    })
  }

  return {
    createFollower,
    options
  }
}