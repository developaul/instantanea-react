import { Grid, Theme } from '@mui/material';
import { makeStyles } from "@mui/styles"

import Service from "../Service"

const services = [
  'Información',
  'Ayuda',
  'Prensa',
  'API',
  'Privacidad',
  'Condiciones',
  'Ubicaciones',
  'Cuentas destacadas',
  'Hashtags',
  'Idioma'
]

const ServicesList = () => {

  const classes = useStyles()

  return (
    <Grid
      className={classes.container}
      container>
      {services.map((service, index) => (
        <Service
          key={service}
          isLastService={(index === services.length - 1)}
          title={service}
        />
      ))}
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    marginTop: spacing(4)
  }
}), { name: 'ServiceList' })

export default ServicesList
