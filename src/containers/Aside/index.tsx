import { Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

import ShortUserCard from "../../components/ShortUserCard"
import SuggestionList from "../../components/SuggestionList"

const Aside = () => {

  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      className={classes.container}
    >
      <Grid item >
        <ShortUserCard />
      </Grid>

      <Grid item >
        <SuggestionList />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    padding: spacing(6.5, 0, 0, 1.5)
  }
}), { name: 'Aside' })


export default Aside