import { Container, Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

import Stories from "../Stories"
import Publications from "../Publications"
import Aside from "../Aside"

const MainHome = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid
        container>
        <Grid item xs={8}>
          <Grid
            className={classes.subContainer}
            container
            direction='column' >
            <Grid item>
              <Stories />
            </Grid>
            <Grid item>
              <Publications />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Aside />
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  subContainer: {
    paddingRight: spacing(1.5),
    paddingTop: spacing(2.5)
  }
}), { name: 'MainHome' })

export default MainHome
