import { useMutation, MutationHookOptions, useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';

import { AUTHENTICATE_USER, GET_USER } from './types';

import { AuthenticateUserArgs } from './interfaces';

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

export const useGetUser = () => {
  const {
    data: {
      getUser: user
    } = { getUser: {} },
    loading
  } = useQuery(GET_USER)

  return { user, loading }
}


