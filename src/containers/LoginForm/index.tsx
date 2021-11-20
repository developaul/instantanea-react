import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Divider,
  Typography,
  TextField,
  CardActions
} from "@mui/material"

import FormFooter from "../FormFooter"

import { FormFooterTypes } from "../../interfaces"

const LoginForm = () => {
  return (
    <Container maxWidth={'xs'}>
      <Grid
        direction='column'
        rowGap={2}
        container>
        <Grid
          width='100%'
          item>
          <Card>
            <CardHeader
              disableTypography
              title={
                <img src='assets/logo.png' alt='Instantanea' />
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
        </Grid>
        <Grid
          width='100%'
          item>
          <FormFooter type={FormFooterTypes.login} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginForm
