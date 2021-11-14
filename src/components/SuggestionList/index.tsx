import { Grid, Typography } from '@mui/material';

import SuggestionCard from '../SuggestionCard';

const suggestionList = [
  0,
  1,
  2,
  3
]

const SuggestionList = () => {
  return (
    <Grid
      direction="column"
      container>
      <Grid item>
        <Typography>
          Sugerencia para ti
        </Typography>
      </Grid>

      <Grid item>
        {suggestionList.map((suggestion) => (
          <SuggestionCard key={suggestion} />
        ))}
      </Grid>
    </Grid>
  )
}

export default SuggestionList
