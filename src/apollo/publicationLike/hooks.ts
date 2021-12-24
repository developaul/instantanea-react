import { MutationHookOptions, useMutation } from '@apollo/client';
import produce from 'immer';

import { Publication } from '../../interfaces';
import { GET_PUBLICATIONS } from '../publication/types';
import { CREATE_PUBLICATION_LIKE, REMOVE_PUBLICATION_LIKE } from './types';

export const useCreatePublicationLike = (params?: MutationHookOptions) =>
  useMutation(CREATE_PUBLICATION_LIKE, {
    update: (cache, { data: { createPublicationLike: publicationLike } }) => {
      const queryParams = {
        query: GET_PUBLICATIONS,
        variables: {
          page: 1,
          limit: 15
        }
      }

      cache.writeQuery({
        ...queryParams,
        data: produce(cache.readQuery(queryParams), ({ getPublications: publications }: { getPublications: Publication[] }) => {
          const index = publications.findIndex(el => el._id === publicationLike.publicationId)

          if (index !== -1) {
            publications[index].likes.push(publicationLike)
            publications[index].currentUserLikes = true
          }
        })
      })
    },
    ...params
  })

export const useRemovePublicationLike = (params?: MutationHookOptions) =>
  useMutation(REMOVE_PUBLICATION_LIKE, {
    update: (cache, { data: { removePublicationLike: publicationLike } }) => {
      const queryParams = {
        query: GET_PUBLICATIONS,
        variables: {
          page: 1,
          limit: 15
        }
      }

      cache.writeQuery({
        ...queryParams,
        data: produce(cache.readQuery(queryParams), ({ getPublications: publications }: { getPublications: Publication[] }) => {
          const index = publications.findIndex(el => el._id === publicationLike.publicationId)

          if (index !== -1) {
            publications[index].likes = publications[index].likes.filter(el => el._id !== publicationLike._id)
            publications[index].currentUserLikes = false
          }
        })
      })
    },
    ...params
  })
