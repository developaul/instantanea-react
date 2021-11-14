import { Grid } from "@mui/material"

import Publication from "../../components/Publication"

import { publications } from "../../mocks"

const Publications = () => {
  return (
    <Grid container>
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
