import { MutationHookOptions, useMutation, QueryHookOptions, useQuery } from '@apollo/client';

import { CREATE_PUBLICATION, GET_PUBLICATIONS } from "./types";

export const useCreatePublication = (params?: MutationHookOptions) =>
  useMutation(CREATE_PUBLICATION, {
    update: (cache, result) => {
      console.log("🚀 ~ result", result)

    },
    ...params
  })

export const useGetPublications = <T>(params?: QueryHookOptions) =>
  useQuery<T>(GET_PUBLICATIONS, params)
