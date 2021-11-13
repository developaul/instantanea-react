import { Link } from "react-router-dom"
import { Grid } from "@mui/material"

import SearchInput from "../../components/SearchInput"
import Navbar from "../../components/Navbar"

const Header = () => {
  return (
    <Grid container>
      <Grid item>
        <Link to="/">
          <img src="assets/logo.png" alt="Instantanea" />
        </Link>
      </Grid>

      <Grid item>
        <SearchInput />
      </Grid>

      <Grid item>
        <Navbar />
      </Grid>
    </Grid>
  )
}

export default Header
