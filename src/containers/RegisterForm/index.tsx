import { Container, Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

import FormFooter from "../../components/FormFooter"
import Form from '../../components/RegisterForm'

import { FormFooterTypes } from "../../interfaces"

const RegisterForm = () => {

  const classes = useStyles()

  return (
    <Container
      maxWidth={'xs'}
      className={classes.container}
    >
      <Grid
        direction='column'
        rowGap={2}
        container
      >
        <Grid
          width='100%'
          item
        >
          <Form />
        </Grid>
        <Grid
          width='100%'
          item
        >
          <FormFooter
            type={FormFooterTypes.register}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    marginTop: spacing(8)
  }
}), { name: 'RegisterForm' })

export default RegisterForm
