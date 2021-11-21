import { memo } from 'react'
import {
  Avatar as MuiAvatar,
  AvatarProps,
  Theme
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'

interface CustomAvatarProps {
  avatarProps?: AvatarProps
  userName: string
  thereStories: boolean
  className?: string
}

interface StyleProps {
  thereStories: boolean
}

const Avatar = ({
  userName,
  thereStories,
  className,
  avatarProps
}: CustomAvatarProps) => {

  const classes = useStyles({ thereStories })

  const history = useHistory()

  const _handleRedirect = () => {
    const path = (thereStories) ? `/stories/${userName}` : `/${userName}`
    history.push(path)
  }

  return (
    <div
      className={clsx(classes.container, className)}
      onClick={_handleRedirect}
    >
      <MuiAvatar
        {...avatarProps}
      />
    </div>
  )
}

const useStyles = makeStyles(({ spacing, palette, shadows }: Theme) => ({
  container: {
    cursor: 'pointer',
    borderRadius: '100%',
    padding: spacing(0.25),
    boxShadow: ({ thereStories }: StyleProps) => thereStories ? shadows[0] : shadows[2],
    background: ({ thereStories }: StyleProps) => thereStories
      ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
      : palette.common.white
  }
}), { name: 'Avatar' })

export default memo(Avatar)