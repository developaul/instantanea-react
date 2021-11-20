import { memo, useMemo } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

import { FormFooterTypes } from "../../interfaces"

interface FormFooterProps {
  type: FormFooterTypes
}

const FormFooter = ({ type }: FormFooterProps) => {

  const classes = useStyles()

  const isLogin = useMemo(() => type === FormFooterTypes.login, [type])

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.infoText} component='span'>
          {(isLogin) ? '¿No tienes cuenta?' : '¿Tienes una cuenta?'}
        </Typography>
        <Link className={classes.actionText} to={`/accounts/${(isLogin) ? FormFooterTypes.register : FormFooterTypes.login}`}>
          <Typography color='primary' component='span'>
            {(isLogin) ? 'Registrate' : 'Inicia sesión'}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    marginRight: spacing(0.5)
  },
  actionText: {
    textDecoration: 'none'
  }
}), { name: 'FormFooter' })

export default memo(FormFooter)
