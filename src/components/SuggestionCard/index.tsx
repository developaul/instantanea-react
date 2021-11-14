import { Avatar, Button, Grid, Typography } from "@mui/material"

const SuggestionCard = () => {
  return (
    <Grid
      alignItems="center"
      justifyContent="space-between"
      container
    >
      <Grid item>
        <Grid container>
          <Grid item>
            <Avatar
              alt="Paul Chávez"
              sx={{ width: 32, height: 32 }}
            >
              P
            </Avatar>
          </Grid>

          <Grid item>
            <Typography variant="h6">
              Paul
            </Typography>
            <Typography>
              sugerencia para ti
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          variant="text"
        >
          Seguir
        </Button>
      </Grid>
    </Grid>
  )
}

export default SuggestionCard
