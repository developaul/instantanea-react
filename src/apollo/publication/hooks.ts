import {
  MutationHookOptions,
  useMutation,
  QueryHookOptions,
  useQuery,
  QueryResult
} from '@apollo/client';
import produce from 'immer';

import {
  CREATE_PUBLICATION,
  GET_PUBLICATION,
  GET_PUBLICATIONS,
  GET_SHORT_PUBLICATIONS
} from "./types";

import {
  CustomQueryResult,
  Publication,
  PublicationsPagination,
  ShortPublication
} from '../../interfaces';

export const useCreatePublication = (params?: MutationHookOptions) =>
  useMutation(CREATE_PUBLICATION, {
    update: (cache, { data: { createPublication: publication } }) => {
      const queryParams = {
        query: GET_PUBLICATIONS,
        variables: {
          page: 1,
          limit: 15
        }
      }

      cache.writeQuery({
        ...queryParams,
        data: produce(cache.readQuery(queryParams), ({ getPublications }: { getPublications: PublicationsPagination }) => {
          getPublications.docs.unshift(publication)
        })
      })
    },
    ...params
  })


export const useGetPublications = (params?: QueryHookOptions): CustomQueryResult<{ getPublications: PublicationsPagination }> => {
  const { fetchMore, ...rest } = useQuery(GET_PUBLICATIONS, params)

  const customFetchMore = (variables: any) => {
    fetchMore({
      variables,
      updateQuery: ({ getPublications: prevPublications }, { fetchMoreResult: { getPublications: currentPublications } }) => ({
        getPublications: {
          info: {
            ...currentPublications.info
          },
          docs: [
            ...prevPublications.docs,
            ...currentPublications.docs
          ]
        }

      })
    })
  }

  return {
    ...rest,
    fetchMore,
    customFetchMore
  }
}

export const useGetShortPublications = (params?: QueryHookOptions): QueryResult<{ getShortPublications: ShortPublication[] }> =>
  useQuery(GET_SHORT_PUBLICATIONS, params)

export const useGetPublication = (params?: QueryHookOptions): QueryResult<{ getPublication: Publication }> =>
  useQuery(GET_PUBLICATION, params)