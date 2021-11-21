import { memo } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Theme,
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
  userName: string
  firstName: string
  lastName: string
}

const initialValues: FormValues = {
  email: '',
  password: '',
  userName: '',
  firstName: '',
  lastName: ''
}

const RegisterForm = () => {
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
        className={classes.cardHeader}
        classes={{
          content: classes.headerContent
        }}
        disableTypography
        title={
          <Grid
            rowGap={1}
            direction='column'
            alignItems='center'
            justifyContent='center'
            container>
            <img
              width={160}
              src="/assets/logo.png"
              alt='Instantanea'
            />

            <Typography
              variant='body1'
              color='secondary'
              align='center'
              fontWeight={700}
              maxWidth={200}
            >
              Regístrate para ver fotos y videos de tus amigos.
            </Typography>
          </Grid>

        }
      />
      <CardContent
        className={classes.cardContent}
      >
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
              <Divider>
                <Typography
                  variant='h6'
                  color='secondary'
                >
                  o
                </Typography>
              </Divider>
            </Grid>

            <Grid item>
              <TextField
                {...formik.getFieldProps('email')}
                error={!!formik.errors.email}
                helperText={formik.errors.email}
                size='small'
                fullWidth
                placeholder='Correo electrónico'
              />
            </Grid>

            <Grid item>
              <TextField
                {...formik.getFieldProps('firstName')}
                error={!!formik.errors.firstName}
                helperText={formik.errors.firstName}
                size='small'
                fullWidth
                placeholder='Nombres'
              />
            </Grid>

            <Grid item>
              <TextField
                {...formik.getFieldProps('lastName')}
                error={!!formik.errors.lastName}
                helperText={formik.errors.lastName}
                size='small'
                fullWidth
                placeholder='Apellidos'
              />
            </Grid>

            <Grid item>
              <TextField
                {...formik.getFieldProps('userName')}
                error={!!formik.errors.userName}
                helperText={formik.errors.userName}
                size='small'
                fullWidth
                placeholder='Nombre de usuario'
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
              Registrarte
            </Button>
          </Grid>

          <Grid
            container
            item
            justifyContent='center'>
            <Typography
              color='secondary'
              align='center'
              variant='caption'
              component='a'
            >
              Al registrarte, aceptas nuestras <Typography color='inherit' component='strong' variant='caption' fontWeight={700}>Condiciones</Typography>, la <Typography color='inherit' component='strong' variant='caption' fontWeight={700}>Política de datos y la Política de cookies.</Typography>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  headerContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardHeader: {
    '&.MuiCardHeader-root': {
      paddingRight: spacing(5),
      paddingTop: spacing(4),
      paddingLeft: spacing(5)
    }
  },
  cardContent: {
    '&.MuiCardContent-root': {
      paddingTop: spacing(0),
      paddingRight: spacing(5),
      paddingLeft: spacing(5)
    }
  }
}), { name: 'LoginForm-Form' })

const validationSchema = Yup.object({
  email: Yup.string().trim().required('El campo es requerido').email('Email Invalido'),
  password: Yup.string().trim().required('El campo es requerido').min(6, 'Debe contener como minimo 6 caracteres'),
  userName: Yup.string().trim().required('El campo es requiredo'),
  firstName: Yup.string().trim().required('El campo es requiredo'),
  lastName: Yup.string().trim().required('El campo es requiredo')
})

export default memo(RegisterForm)
