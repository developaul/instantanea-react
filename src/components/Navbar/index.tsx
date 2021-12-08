import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom"
import {
  Avatar,
  IconButton
} from "@mui/material"
import {
  Add as AddIcon
} from '@mui/icons-material'

import { UserContext } from '../../Providers/UserProvider';
import CreatePost from "../../containers/CreatePost";

const Navbar = () => {
  const { userName, photo, firstName, lastName } = useContext(UserContext)

  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const _handleChangeOpenDialog = useCallback(() => {
    setIsOpenDialog(prev => !prev)
  }, [])

  return (
    <>
      <Link to="/">
        <IconButton size="medium">
          <img src="/assets/homeFill.svg" alt="Home" />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton size="medium">
          <img src="/assets/messenger.svg" alt="Messenger" />
        </IconButton>
      </Link>
      <Link to="/">
        <IconButton size="medium">
          <img src="/assets/heartOutline.svg" alt="HeartOutline" />
        </IconButton>
      </Link>

      <IconButton
        onClick={_handleChangeOpenDialog}
        size="medium">
        <AddIcon />
      </IconButton>

      <Link to={`/${userName}`}>
        <IconButton size="medium">
          <Avatar
            alt={`${firstName} ${lastName}`}
            src={photo}
            sx={{ width: 24, height: 24 }}
          />
        </IconButton>
      </Link>

      <CreatePost
        onClose={_handleChangeOpenDialog}
        open={isOpenDialog}
      />
    </>
  )
}

export default Navbar
