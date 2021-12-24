import { gql } from '@apollo/client'

export const PAGINATION_FRAGMENT = gql`
  fragment paginationFragment on Pagination {
    limit
    page
    totalPages
    nextPage
    prevPage
    hasPrevPage
    hasNextPage
  }
`