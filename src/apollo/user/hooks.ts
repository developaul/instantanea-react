import { useMutation, MutationHookOptions, useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';

import {
  AUTHENTICATE_USER,
  CREATE_USER,
  GET_USER,
  GET_USER_BY_USERNAME
} from './types';

import { AuthenticateUserArgs, CreateUserArgs, GetProfileByUserNameArgs, GetProfileByUserNameResult } from './interfaces';

export const useAuthenticateUser = (params?: MutationHookOptions) => {
  const history = useHistory()

  const [mutation, options] = useMutation(AUTHENTICATE_USER, {
    onCompleted: ({ authenticateUser }) => {
      const { token } = authenticateUser
      localStorage.setItem('accessToken', token)

      history.push('/')
    },
    ...params
  })

  const authenticateUser = (variables: AuthenticateUserArgs): void => {
    mutation({
      variables
    })
  }

  return {
    authenticateUser,
    options
  }
}

export const useCreateUser = (params?: MutationHookOptions) => {
  const history = useHistory()

  const [mutation, options] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      const { token } = createUser
      localStorage.setItem('accessToken', token)

      history.push('/')
    },
    ...params
  })

  const createUser = (variables: CreateUserArgs): void => {
    mutation({
      variables
    })
  }

  return {
    createUser,
    options
  }
}

export const useGetUser = () => {
  const {
    data: {
      getUser: user
    } = { getUser: {} },
    loading
  } = useQuery(GET_USER)

  return { user, loading }
}

export const useGetProfileByUserName = (variables: GetProfileByUserNameArgs): GetProfileByUserNameResult => {
  const {
    data: {
      getUserByUserName: profile
    } = { getUserByUserName: {} },
    loading
  } = useQuery(GET_USER_BY_USERNAME, {
    variables
  })

  return { profile, loading }
}
