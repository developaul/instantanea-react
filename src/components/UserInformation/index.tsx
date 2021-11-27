import { useMemo, useCallback, useContext } from "react"
import { Button, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useSnackbar } from 'notistack'

import { useCreateFollower, useRemoveFollow } from '../../apollo/follower/hooks';
import { ProfileContext } from "../../Providers/ProfileProvider"
import { UserContext } from "../../Providers/UserProvider";

import { numberWithCommas } from "../../utils"

const UserInformation = () => {
  const classes = useStyles()

  const {
    _id,
    currentUserIsFollowing,
    followers,
    following,
    description,
    firstName,
    userName,
    lastName
  } = useContext(ProfileContext)

  const { _id: userId } = useContext(UserContext)
  const { enqueueSnackbar } = useSnackbar()

  const followersWithCommas = useMemo(() => numberWithCommas(followers || 0), [followers])
  const followingWithCommas = useMemo(() => numberWithCommas(following || 0), [following])
  const followersText = useMemo(() => (followers === 1) ? 'seguidor' : 'seguidores', [followers])
  const followingText = useMemo(() => (following === 1) ? 'seguido' : 'seguidos', [following])
  const isCurrentUser = useMemo(() => (_id === userId), [_id, userId])

  const [createFollower] = useCreateFollower({ userName }, {
    onError: error => { enqueueSnackbar(error.message, { variant: 'error' }) }
  })
  const [removeFollow] = useRemoveFollow({ userName }, {
    onError: error => { enqueueSnackbar(error.message, { variant: 'error' }) }
  })

  const _handleCreateFollower = useCallback(() => {
    createFollower({ variables: { followeeId: _id } })
  }, [createFollower, _id])

  const _handleRemoveFollow = useCallback(() => {
    removeFollow({ variables: { followeeId: _id } })
  }, [removeFollow, _id])

  const _handleEditProfile = useCallback(() => {

  }, [])

  return (
    <Grid
      rowSpacing={2}
      direction='column'
      container>
      <Grid item>
        <Grid
          alignItems='center'
          justifyContent='space-between'
          container>
          <Grid item>
            <Typography variant='h6'>
              {firstName} {lastName}
            </Typography>
          </Grid>
          <Grid item>
            {(isCurrentUser) ? (
              <Button
                onClick={_handleEditProfile}
                color='secondary'
                variant="outlined">
                Editar Perfil
              </Button>
            ) : (currentUserIsFollowing) ? (
              <Button
                onClick={_handleRemoveFollow}
                color='primary'
                variant="contained">
                Dejar de Seguir
              </Button>
            ) : (
              <Button
                onClick={_handleCreateFollower}
                color='secondary'
                variant="outlined">
                Seguir
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        justifyContent='space-between'
        alignItems='center'
        columnSpacing={4}
        container
        item
      >
        <Grid item>
          <Typography
            className={classes.marginRight}
            variant='subtitle1'
            component='span'>
            141
          </Typography>
          <Typography component='span'>
            publicaciones
          </Typography>
        </Grid>

        <Grid
          item>
          <Typography
            className={classes.marginRight}
            variant='subtitle1'
            component='span'>
            {followersWithCommas}
          </Typography>
          <Typography component='span'>
            {followersText}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            className={classes.marginRight}
            variant='subtitle1'
            component='span'>
            {followingWithCommas}
          </Typography>
          <Typography component='span'>
            {followingText}
          </Typography>
        </Grid>
      </Grid>

      {(description) && (
        <Grid item>
          <Typography>
            {description}
          </Typography>
        </Grid>
      )}
    </Grid >
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  marginRight: {
    paddingRight: spacing(0.5)
  }
}), { name: 'UserInformation' })

export default UserInformation
