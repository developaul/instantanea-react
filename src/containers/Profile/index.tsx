import { useContext } from "react";
import { Container, Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles";

import { ProfileContext } from "../../Providers/ProfileProvider";

import UserInformation from '../../components/UserInformation';
import Avatar from "../../components/Avatar"

const Profile = () => {
  const classes = useStyles()
  const { userName, photo } = useContext(ProfileContext)

  return (
    <Container className={classes.container}>
      <Grid
        columnGap={6}
        alignItems='center'
        container>
        <Grid item>
          <Avatar
            avatarProps={{
              sx: { width: 176, height: 176 },
              src: photo
            }}
            userName={userName}
            thereStories={false}
          />
        </Grid>

        <Grid item>
          <UserInformation />
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    paddingTop: spacing(5),
    paddingBottom: spacing(4)
  }
}), { name: 'Profile' })

export default Profile
