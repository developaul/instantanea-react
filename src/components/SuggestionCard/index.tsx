import { Avatar, Button, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const SuggestionCard = () => {
  const classes = useStyles()

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
              className={classes.avatar}
              alt="Paul Chávez"
              sx={{ width: 32, height: 32 }}
            >
              P
            </Avatar>
          </Grid>

          <Grid item>
            <Typography
              variant="subtitle2">
              Paul
            </Typography>
            <Typography
              className={classes.subTitle2}
              variant="body2">
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

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  avatar: {
    marginRight: spacing(1)
  },
  subTitle2: {
    color: palette.secondary[900]
  }
}), { name: 'SuggestionCard' })

export default SuggestionCard
