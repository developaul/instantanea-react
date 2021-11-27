import { Link } from "react-router-dom"
import { Container, Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles";

import SearchInput from "../../components/SearchInput"
import Navbar from "../../components/Navbar"

const Header = () => {

  const classes = useStyles()

  return (
    <header className={classes.container}>
      <Container>
        <Grid
          className={classes.content}
          container
          justifyContent='space-between'
          alignItems="center"
        >
          <Grid item>
            <Link to="/">
              <img src="/assets/logo.png" alt="Instantanea" />
            </Link>
          </Grid>

          <Grid item>
            <SearchInput />
          </Grid>

          <Grid item>
            <Navbar />
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

const useStyles = makeStyles(({ palette }: Theme) => ({
  container: {
    borderBottom: `1px solid ${palette.secondary.main}`
  },
  content: {
    height: 60
  }
}), { name: 'Header' })

export default Header
