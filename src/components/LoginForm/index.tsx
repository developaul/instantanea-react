import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const LoginForm = () => {
  const classes = useStyles()

  return (
    <Card>
      <CardHeader
        classes={{
          content: classes.headerContent
        }}
        disableTypography
        title={
          <img
            width={160}
            src="/assets/logo.png"
            alt='Instantanea'
          />
        }
      />
      <CardContent>
        <Grid
          rowGap={2}
          direction='column'
          container>
          <Grid
            rowGap={1}
            direction='column'
            container
            item
          >
            <Grid item>
              <TextField
                size='small'
                fullWidth
                placeholder='Teléfono, usuario o correo electrónico'
              />
            </Grid>
            <Grid item>
              <TextField
                size='small'
                fullWidth
                placeholder='Contraseña'
              />
            </Grid>
          </Grid>

          <Grid item>
            <Button
              fullWidth
              variant='contained'
            >
              Iniciar Sesión
            </Button>
          </Grid>

          <Grid item>
            <Divider>
              <Typography>
                O
              </Typography>
            </Divider>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid
          rowGap={1}
          alignItems='center'
          direction='column'
          container>
          <Grid item>
            <Typography>Iniciar sesión con Facebook</Typography>
          </Grid>
          <Grid>
            <Typography>¿Olvidaste tu contraseña?</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(() => ({
  headerContent: {
    display: 'flex',
    justifyContent: 'center'
  }
}), { name: 'LoginForm-Form' })

export default LoginForm
