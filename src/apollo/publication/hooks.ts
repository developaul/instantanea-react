import { MutationHookOptions, useMutation, QueryHookOptions, useQuery, QueryResult } from '@apollo/client';

import {
  CREATE_PUBLICATION,
  GET_PUBLICATION,
  GET_PUBLICATIONS,
  GET_SHORT_PUBLICATIONS
} from "./types";

import { Publication, ShortPublication } from '../../interfaces';

export const useCreatePublication = (params?: MutationHookOptions) =>
  useMutation(CREATE_PUBLICATION, {
    update: (cache, result) => {
      console.log("🚀 ~ result", result)

    },
    ...params
  })

export const useGetPublications = (params?: QueryHookOptions): QueryResult<{ getPublications: Publication[] }> =>
  useQuery(GET_PUBLICATIONS, params)

export const useGetShortPublications = (params?: QueryHookOptions): QueryResult<{ getShortPublications: ShortPublication[] }> =>
  useQuery(GET_SHORT_PUBLICATIONS, params)

export const useGetPublication = (params?: QueryHookOptions): QueryResult<{ getPublication: Publication }> =>
  useQuery(GET_PUBLICATION, params)