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
  Typography,
} from "@mui/material"
import {
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material'
import { makeStyles } from "@mui/styles"

const Publication = () => {
  const classes = useStyles()

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 32, height: 32 }}
          >
            W
          </Avatar>
        }
        action={
          <IconButton
            size="medium"
            aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title='Wendy'
      />

      <CardMedia
        component="img"
        height="194"
        image="https://www.incimages.com/uploaded_files/image/1920x1080/software-computer-code-1940x900_35196.jpg"
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

      <CardContent>
        <Typography variant="subtitle1">
          49,643 Me gusta
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <Typography component='strong'>
            Wendy
          </Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>

        <Typography variant="body2">
          Ver los 269 comentarios
        </Typography>

        <Typography variant="body2">
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
  )
}

const useStyles = makeStyles(() => ({
  flexEnd: {
    justifySelf: 'flex-end'
  }
}), { name: 'Publication' })

export default Publication
