import { useCallback, useContext, useState } from "react";
import { Container, Grid, Avatar, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles";

import { ProfileContext } from "../../Providers/ProfileProvider";

import UserInformation from '../../components/UserInformation';
import AvatarEditMenu from "../../components/AvatarEditMenu";

const Profile = () => {
  const classes = useStyles()

  const [isEditAvatar, setIsEditAvatar] = useState<boolean>(false)

  const { photo } = useContext(ProfileContext)

  const _handleEditAvatar = useCallback(() => {
    setIsEditAvatar(prev => !prev)
  }, [])

  return (
    <Container className={classes.container}>
      <Grid
        columnGap={6}
        alignItems='center'
        container>
        <Grid item>
          <Avatar
            className={classes.avatar}
            onClick={_handleEditAvatar}
            sx={{ width: 176, height: 176 }}
            src={photo}
          />
        </Grid>

        <Grid item>
          <UserInformation />
        </Grid>
      </Grid>

      <AvatarEditMenu
        open={isEditAvatar}
        onClose={_handleEditAvatar}
      />
    </Container>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  avatar: {
    cursor: 'pointer'
  },
  container: {
    paddingTop: spacing(5),
    paddingBottom: spacing(4)
  }
}), { name: 'Profile' })

export default Profile
