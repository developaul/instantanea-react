import { useContext } from 'react';
import { Button, Grid, Typography, Theme } from '@mui/material';
import { makeStyles } from "@mui/styles"

import { UserContext } from '../../Providers/UserProvider';

import Avatar from '../Avatar'

const UserCard = () => {
  const classes = useStyles()
  const { userName, photo, firstName, lastName } = useContext(UserContext)
  return (
    <Grid
      alignItems="center"
      justifyContent="space-between"
      container
      xs
    >
      <Grid
        alignItems="center"
        container
        item
        xs >
        <Grid item>
          <Avatar
            userName={userName}
            thereStories={false}
            className={classes.avatar}
            avatarProps={{
              src: photo,
              alt: `${firstName} ${lastName}`,
              sx: { width: 48, height: 48 }
            }}
          />
        </Grid>

        <Grid item>
          <Typography variant="subtitle2">
            {firstName} {lastName}
          </Typography>
          <Typography
            className={classes.secondary300}
            variant="body2"
          >
            {userName}
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          color="primary"
        >
          Cambiar
        </Button>
      </Grid>
    </Grid >
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  avatar: {
    marginRight: spacing(1)
  },
  secondary300: {
    color: palette.secondary[300]
  }
}), { name: 'UserCard' })

export default UserCard
