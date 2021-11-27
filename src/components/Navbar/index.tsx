import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom"
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Theme,
  Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import {
  Add as AddIcon,
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material'
import { useDropzone } from 'react-dropzone';

import { UserContext } from '../../Providers/UserProvider';

const Navbar = () => {
  const classes = useStyles()

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  console.log("🚀 ~ Navbar ~ acceptedFiles", acceptedFiles)

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

      <Dialog
        onClose={_handleChangeOpenDialog}
        open={isOpenDialog}>
        <DialogTitle>
          Crear una nueva publicación
        </DialogTitle>

        <DialogContent
          className={classes.dialogContent}
          dividers>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className={classes.dropzoneContent}>
              <CloudUploadIcon fontSize='large' color='primary' />
              <Typography align='center' >
                Arrastra las fotos y los videos aquí
              </Typography>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  dialogContent: {
    minWidth: 500,
    minHeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .dropzone': {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  },
  dropzoneContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}), { name: 'Navbar' })

export default Navbar
