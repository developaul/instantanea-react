import { Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

import SuggestionList from "../../components/SuggestionList"
import ServicesList from "../../components/ServicesList"
import UserCard from "../../components/UserCard"

const Aside = () => {

  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      className={classes.container}
    >
      <Grid item >
        <UserCard />
      </Grid>

      <Grid item >
        <SuggestionList />
      </Grid>

      <Grid item>
        <ServicesList />
      </Grid>

      <Grid item>
        <Typography
          className={classes.creditsText}
          variant="body1">
          @{new Date().getFullYear()} developaul
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  container: {
    padding: spacing(6.5, 0, 0, 1.5)
  },
  creditsText: {
    color: palette.secondary[200],
    paddingTop: spacing(3),
    textTransform: 'uppercase'
  }
}), { name: 'Aside' })


export default Aside
