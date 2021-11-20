import {
  Container,
  Grid,
  Theme,
} from "@mui/material"
import { makeStyles } from "@mui/styles"

import FormFooter from "../../components/FormFooter"
import Form from '../../components/LoginForm'

import { FormFooterTypes } from "../../interfaces"

const LoginForm = () => {
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
            type={FormFooterTypes.login}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    marginTop: spacing(6)
  }
}), { name: 'LoginForm' })

export default LoginForm
