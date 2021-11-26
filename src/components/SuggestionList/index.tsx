import { Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import SuggestionCard from '../SuggestionCard';

import { ShortProfile } from '../../interfaces';

interface SuggestionListProps {
  users: ShortProfile[]
}

const SuggestionList = ({ users }: SuggestionListProps) => {
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
        item>
        {users.map((user) => (
          <SuggestionCard
            key={user._id}
            {...user}
          />
        ))}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  container: {
    marginTop: spacing(4)
  },
  subTitle1: {
    color: palette.secondary[500],
  }
}), { name: 'SuggestionList' })

export default SuggestionList
