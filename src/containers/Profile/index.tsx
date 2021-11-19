import { Container, Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles";

import Avatar from "../../components/Avatar"
import UserInformation from '../../components/UserInformation';

const Profile = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid
        columnGap={6}
        alignItems='center'
        container>
        <Grid item>
          <Avatar
            avatarProps={{
              sx: { width: 176, height: 176 }
            }}
            userName='developaul'
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
