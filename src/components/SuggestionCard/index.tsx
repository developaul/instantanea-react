import { useCallback } from "react"
import { Button, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

import Avatar from "../Avatar"

import { User } from "../../interfaces"

const SuggestionCard = ({ photo, userName, firstName, lastName }: User) => {
  const classes = useStyles()

  const _handleCreateFollower = useCallback(() => {

  }, [])

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
            <Typography
              variant="subtitle2">
              {firstName} {lastName}
            </Typography>
            <Typography
              className={classes.secondary300}
              variant="body2">
              sugerencia para ti
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          variant="text"
          onClick={_handleCreateFollower}
        >
          Seguir
        </Button>
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
  }
}), { name: 'SuggestionCard' })

export default SuggestionCard
