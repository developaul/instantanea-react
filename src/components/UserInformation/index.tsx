import { Button, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const UserInformation = () => {
  const classes = useStyles()

  return (
    <Grid
      rowSpacing={2}
      direction='column'
      container>
      <Grid item>
        <Grid
          alignItems='center'
          justifyContent='space-between'
          container>
          <Grid item>
            <Typography>
              Paul Chávez
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color='secondary'
              variant="outlined">
              Enviar mensaje
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        justifyContent='space-between'
        alignItems='center'
        columnSpacing={4}
        container
        item
      >
        <Grid item>
          <Typography
            className={classes.marginRight}
            component='span'>
            141
          </Typography>
          <Typography component='span'>
            Publicaciones
          </Typography>
        </Grid>

        <Grid
          item>
          <Typography
            className={classes.marginRight}
            component='span'>
            2,764
          </Typography>
          <Typography component='span'>
            seguidores
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            className={classes.marginRight}
            component='span'>
            710
          </Typography>
          <Typography component='span'>
            seguidos
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <Typography>
          Disfruta de los mejores paisajes del mundo
        </Typography>
      </Grid>
    </Grid >
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  marginRight: {
    paddingRight: spacing(0.5)
  }
}), { name: 'UserInformation' })

export default UserInformation
