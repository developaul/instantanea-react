import { MutationHookOptions, useMutation } from '@apollo/client';

import { CREATE_PUBLICATION_LIKE, REMOVE_PUBLICATION_LIKE } from './types';

export const useCreatePublicationLike = (params?: MutationHookOptions) =>
  useMutation(CREATE_PUBLICATION_LIKE, {
    ...params
  })

export const useRemovePublicationLike = (params?: MutationHookOptions) =>
  useMutation(REMOVE_PUBLICATION_LIKE, {
    ...params
  })
