import { Container, Grid } from "@mui/material"

import Publications from "../Publications"
import Aside from "../Aside"

const MainHome = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={8}>
          <Publications />
        </Grid>
        <Grid item xs={4}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainHome
