import { useContext } from 'react';
import { Grid, InputBase, Avatar, Typography, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

import { UserContext } from '../../Providers/UserProvider';
import { PostCreationState } from "../../interfaces"

interface Props extends PostCreationState {
  onChangeDescription: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const PostCreationPreview = ({ urlMedia, onChangeDescription }: Props) => {
  const classes = useStyles()

  const { photo, firstName, lastName, userName } = useContext(UserContext)

  return (
    <Grid
      columnSpacing={2}
      direction='row'
      container>
      <Grid item xs={6}>
        <img
          className={classes.media}
          src={String(urlMedia)}
          alt='preview'
        />
      </Grid>
      <Grid item xs={6}>
        <div className={classes.avatarContainer}>
          <Avatar
            className={classes.avatar}
            src={photo}
            alt={`${firstName} ${lastName}`}
          />

          <Typography variant='subtitle1'>
            {userName}
          </Typography>
        </div>
        <InputBase
          onChange={onChangeDescription}
          fullWidth
          placeholder="Escribe una descripción..."
          multiline
          maxRows={15}
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  media: {
    width: '100%',
    height: '100%'
  },
  description: {
    '& > fieldset': {
      border: 0
    }
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: spacing(2),
    paddingBottom: spacing(1)
  },
  avatar: {
    marginRight: spacing(1)
  }
}), { name: 'PostCreationPreview' })

export default PostCreationPreview
