import { Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import SuggestionCard from '../SuggestionCard';

const suggestionList = [
  0,
  1,
  2,
  3
]

const SuggestionList = () => {

  const classes = useStyles()

  return (
    <Grid
      className={classes.container}
      direction="column"
      container>
      <Grid item>
        <Typography
          className={classes.subTitle1}
          variant="subtitle1">
          Sugerencia para ti
        </Typography>
      </Grid>

      <Grid
        className={classes.suggestionCards}
        item>
        {suggestionList.map((suggestion) => (
          <SuggestionCard key={suggestion} />
        ))}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  container: {
    marginTop: spacing(3)
  },
  subTitle1: {
    color: palette.secondary[900]
  },
  suggestionCards: {
    paddingTop: spacing(2),
  }
}), { name: 'SuggestionList' })

export default SuggestionList
