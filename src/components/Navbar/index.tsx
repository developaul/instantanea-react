import { Link } from "react-router-dom"
import { Avatar, IconButton } from "@mui/material"

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <IconButton size="medium">
          <img src="assets/homeFill.svg" alt="Home" />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton size="medium">
          <img src="assets/messenger.svg" alt="Messenger" />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton size="medium">
          <img src="assets/heartOutline.svg" alt="HeartOutline" />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton size="medium">
          <Avatar
            alt="Paul Chávez"
            sx={{ width: 24, height: 24 }}
          >
            P
          </Avatar>
        </IconButton>
      </Link>
    </>
  )
}

export default Navbar
