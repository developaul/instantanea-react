import { Grid } from "@mui/material"

import Publication from "../../components/Publication"
import { useGetPublications } from '../../apollo/publication/hooks';

import { Publication as IPublication } from "../../interfaces";

const Publications = () => {
  const { data: { getPublications: publications = [] } = {} } = useGetPublications<{ getPublications: IPublication[] }>({ variables: { limit: 15, page: 1 } })

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
    </Grid>
  )
}

export default Publications
