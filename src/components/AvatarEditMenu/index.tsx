import { useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  Avatar,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'

import { UserContext } from '../../Providers/UserProvider';

interface AvatarEditMenuProps {
  open: boolean
  onClose: () => void
}

const AvatarEditMenu = ({ open, onClose }: AvatarEditMenuProps) => {
  const classes = useStyles()

  const { photo, firstName, lastName } = useContext(UserContext)

  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: 16
        }
      }}
      open={open}
      onClose={onClose}>
      <DialogTitle
        className={classes.dialogTitle}
      >
        <Avatar
          className={classes.avatar}
          alt={`${firstName} ${lastName}`}
          src={photo}
        />
        <Typography
          variant='subtitle1'
        >
          Foto de Perfil
        </Typography>
      </DialogTitle>
      <DialogContent classes={{
        root: classes.dialogContentRoot,
      }}>
        <List>
          <ListItem className={classes.dividerTop} divider disablePadding>
            <ListItemButton>
              <ListItemText primary="Subir foto" primaryTypographyProps={{ color: 'primary', align: 'center' }} />
            </ListItemButton>
          </ListItem>
          {(photo) && (
            <ListItem divider disablePadding>
              <ListItemButton>
                <ListItemText primary="Eliminar foto actual" primaryTypographyProps={{ color: 'error', align: 'center' }} />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem disablePadding>
            <ListItemButton onClick={onClose}>
              <ListItemText primary="Cancelar" primaryTypographyProps={{ align: 'center' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  dialogContentRoot: {
    '&.MuiDialogContent-root': {
      padding: spacing(0),
      minWidth: 400
    },
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '&.MuiDialogTitle-root': {
      paddingBottom: spacing(0)
    }
  },
  dividerTop: {
    borderTop: `1px solid #0000001f`
  },
  avatar: {
    marginBottom: spacing(1)
  }
}), { name: 'AvatarEditMenu' })

export default AvatarEditMenu
