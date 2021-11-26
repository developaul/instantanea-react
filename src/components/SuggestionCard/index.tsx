import { useCallback } from "react"
import { Button, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useSnackbar } from "notistack"
import { Link } from "react-router-dom"

import Avatar from "../Avatar"
import { useCreateFollower, useRemoveFollow } from "../../apollo/follower/hooks"

import { ShortProfile } from "../../interfaces"

const SuggestionCard = ({ _id, photo, userName, firstName, lastName, currentUserIsFollowing }: ShortProfile) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const [createFollower] = useCreateFollower({ userName }, {
    onError: error => { enqueueSnackbar(error.message, { variant: 'error' }) }
  })

  const [removeFollow] = useRemoveFollow({ userName }, {
    onError: error => { enqueueSnackbar(error.message, { variant: 'error' }) }
  })

  const _handleCreateFollower = useCallback(() => {
    createFollower({ variables: { followeeId: _id } })
  }, [createFollower, _id])

  const _handleRemoveFollower = useCallback(() => {
    removeFollow({ variables: { followeeId: _id } })
  }, [removeFollow, _id])

  return (
    <Grid
      className={classes.container}
      alignItems="center"
      justifyContent="space-between"
      container
    >
      <Grid item>
        <Grid container>
          <Grid item>
            <Avatar
              className={classes.avatar}
              userName={userName}
              thereStories={false}
              avatarProps={{
                alt: `${firstName} ${lastName}`,
                sx: { width: 32, height: 32 },
                src: photo
              }}
            />
          </Grid>

          <Grid item>
            <Link
              className={classes.link}
              to={`/${userName}`}>
              <Typography
                variant="subtitle2">
                {firstName} {lastName}
              </Typography>
            </Link>
            <Typography
              className={classes.secondary300}
              variant="body2">
              sugerencia para ti
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {(currentUserIsFollowing) ? (
          <Button
            color="error"
            variant="text"
            onClick={_handleRemoveFollower}
          >
            Dejar de seguir
          </Button>
        ) : (
          <Button
            color="primary"
            variant="text"
            onClick={_handleCreateFollower}
          >
            Seguir
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  container: {
    marginTop: spacing(3.5)
  },
  avatar: {
    marginRight: spacing(1)
  },
  secondary300: {
    color: palette.secondary[300]
  },
  link: {
    color: 'unset',
    textDecoration: 'none'
  }
}), { name: 'SuggestionCard' })

export default SuggestionCard
