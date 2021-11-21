import { useContext } from "react";
import { Link } from "react-router-dom"
import { Avatar, IconButton } from "@mui/material"

import { UserContext } from '../../Providers/UserProvider';

const Navbar = () => {
  const { userName, photo, firstName } = useContext(UserContext)

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
      <Link to={`/${userName}`}>
        <IconButton size="medium">
          <Avatar
            alt={firstName}
            src={photo}
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
      </Link>
    </>
  )
}

export default Navbar
