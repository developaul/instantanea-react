import { Grid, CircularProgress } from "@mui/material"
import useInfiniteScroll from "react-infinite-scroll-hook";

import Publication from "../../components/Publication"
import { useGetPublications } from '../../apollo/publication/hooks';
import { Pagination } from "../../interfaces";

const Publications = () => {
  const {
    data: {
      getPublications: {
        docs: publications,
        info
      } = { docs: [], info: {} }
    } = {},
    customFetchMore,
    loading
  } = useGetPublications({ variables: { limit: 15, page: 1 } })

  const { hasNextPage, nextPage, limit } = info as Pagination

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => {
      customFetchMore({
        page: nextPage,
        limit
      })
    },
    disabled: loading || !hasNextPage,
    rootMargin: '0px 0px 400px 0px',
  });


  return (
    <Grid
      direction='column'
      container
      rowGap={2}
    >
      {publications.map(publication => (
        <Publication
          key={publication._id}
          {...publication}
        />
      ))}

      {(loading || hasNextPage) && (
        <CircularProgress ref={sentryRef} />
      )}
    </Grid>
  )
}

export default Publications
