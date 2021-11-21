import { useMutation, MutationHookOptions } from '@apollo/client'
import { useHistory } from 'react-router-dom';

import { AUTHENTICATE_USER } from './types';

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