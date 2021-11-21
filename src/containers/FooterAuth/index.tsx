import { Container, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const FooterAuth = () => {
  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      maxWidth='xs'>
      <Grid
        justifyContent='center'
        alignItems='center'
        container>
        <Grid item>
          <Typography
            variant='body2'
            component='a'
            className={classes.text}
            target='_blank'
            href="https://github.com/developaul">
            © 2021 Developaul
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  container: {
    marginTop: spacing(4),
    marginBottom: spacing(4)
  },
  text: {
    textDecoration: 'none',
    color: palette.secondary[500]
  }
}), { name: 'FooterAuth' })

export default FooterAuth
