import { memo } from 'react'
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
import { useSnackbar } from 'notistack'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useAuthenticateUser } from '../../apollo/user/hooks'

interface FormValues {
  email: string
  password: string
}

const initialValues: FormValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar();

  const { authenticateUser, options: { loading } } = useAuthenticateUser({
    onError: ({ message }) => {
      enqueueSnackbar(message, { variant: 'error' })
    }
  })

  const formik = useFormik<FormValues>({
    validationSchema,
    initialValues,
    onSubmit: authenticateUser,
  })

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
          onSubmit={formik.handleSubmit}
          component='form'
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
                {...formik.getFieldProps('email')}
                error={!!formik.errors.email}
                helperText={formik.errors.email}
                size='small'
                fullWidth
                placeholder='correo electrónico'
              />
            </Grid>
            <Grid item>
              <TextField
                {...formik.getFieldProps('password')}
                error={!!formik.errors.password}
                helperText={formik.errors.password}
                size='small'
                fullWidth
                placeholder='Contraseña'
              />
            </Grid>
          </Grid>

          <Grid item>
            <Button
              disabled={!(formik.isValid && formik.dirty) || loading}
              fullWidth
              color='primary'
              type='submit'
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

const validationSchema = Yup.object({
  email: Yup.string().trim().required('El campo es requerido').email('Email Invalido'),
  password: Yup.string().trim().required('El campo es requerido').min(6, 'Debe contener como minimo 6 caracteres')
})

export default memo(LoginForm)
