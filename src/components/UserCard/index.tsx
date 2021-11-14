import { Avatar, Button, Grid, Typography, Theme } from '@mui/material';
import { makeStyles } from "@mui/styles"

const UserCard = () => {

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
              sx={{ width: 48, height: 48 }}
            >
              P
            </Avatar>
          </Grid>

          <Grid item>
            <Typography variant="subtitle2">
              Paul
            </Typography>
            <Typography
              className={classes.secondary300}
              variant="body2"
            >
              developaul
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          color="primary"
        >
          Cambiar
        </Button>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  avatar: {
    marginRight: spacing(1)
  },
  secondary300: {
    color: palette.secondary[300]
  }
}), { name: 'UserCard' })

export default UserCard
