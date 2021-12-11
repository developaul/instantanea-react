import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Theme,
  Typography,
} from "@mui/material"
import {
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material'
import { makeStyles } from "@mui/styles"

import { Publication as IPublication } from '../../interfaces'

const Publication = ({ media, description, createdBy }: IPublication) => {
  const classes = useStyles()
  const { firstName, lastName, userName, photo } = createdBy


  return (
    <Grid item>
      <Card sx={{ width: '100%' }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={photo}
              alt={`${firstName} ${lastName}`}
            >
              {userName?.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton
              size="medium"
              aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
        />

        <CardMedia
          component="img"
          height="194"
          image={media}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <Grid justifyContent='space-between' container>
            <Grid item>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

              <IconButton aria-label="comment">
                <img src="assets/comentOutline.svg" alt="Comment" />
              </IconButton>

              <IconButton aria-label="share">
                <img src="assets/direct.svg" alt="Share" />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton aria-label="share">
                <img src="assets/collectOutline.svg" alt="Save" />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>

        <CardContent
          className={classes.cardContentRoot}
        >
          <Typography variant="subtitle1">
            49,643 Me gusta
          </Typography>

          <Typography
            variant="subtitle1"
            component='strong'>
            {userName}&nbsp;
          </Typography>
          <Typography
            component="span"
            className={classes.black}
            variant="body1"
          >
            {description}
          </Typography>

          <Typography
            className={classes.quantityComments}
            variant="body2">
            Ver los 269 comentarios
          </Typography>

          <Typography
            className={classes.secondary300}
            variant="caption">
            Hace 31 minutos
          </Typography>
        </CardContent>

        <CardActions>
          <InputBase
            fullWidth
            placeholder='Agrega un comentario...'
            startAdornment={
              <InputAdornment position='start'>
                <Avatar
                  sx={{ width: 24, height: 24 }}
                >
                  W
                </Avatar>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <Button>
                  Publicar
                </Button>
              </InputAdornment>
            }
          />
        </CardActions>
      </Card >
    </Grid>
  )
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  secondary300: {
    color: palette.secondary[300]
  },
  quantityComments: {
    color: palette.secondary[500],
    paddingTop: spacing(1)
  },
  black: {
    color: palette.common.black
  },
  cardContentRoot: {
    '&.MuiCardContent-root': {
      paddingTop: spacing(0)
    }
  }
}), { name: 'Publication' })

export default Publication
