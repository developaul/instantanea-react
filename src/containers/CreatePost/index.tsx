import { useCallback, useMemo, useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Theme,
} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import Upload from "../../components/Upload";
import PostCreationPreview from '../../components/PostCreationPreview';



import { POST_CREATION_VIEWS } from "../../utils/constans";
import { PostCreationState } from '../../interfaces';
import { fileToURL } from '../../utils';
import clsx from 'clsx';

interface Props {
  onClose: () => void,
  open: boolean
}

const CreatePost = ({
  onClose,
  open
}: Props) => {
  const classes = useStyles()

  const [post, setPost] = useState<PostCreationState>({
    media: null,
    description: '',
    urlMedia: '',
    view: POST_CREATION_VIEWS.UPLOAD
  })

  const _handleChangeDescription = useCallback(({ target }) => {
    const { value } = target

    setPost(prev => ({
      ...prev,
      description: value
    }))
  }, [])

  const _handleDropAccepted = useCallback(async ([file]: File[]): Promise<void> => {
    const urlMedia = await fileToURL(file)

    setPost(prev => ({
      ...prev,
      view: POST_CREATION_VIEWS.PREVIEW,
      media: file,
      urlMedia
    }))
  }, [])

  const _handleGoBack = useCallback(() => {
    setPost(prev => ({
      ...prev,
      description: '',
      view: POST_CREATION_VIEWS.UPLOAD,
      media: null
    }))
  }, [])

  const view = useMemo(() => {
    switch (post.view) {
      case POST_CREATION_VIEWS.UPLOAD:
        return <Upload
          dropzoneOptions={{
            accept: 'image/*',
            onDropAccepted: _handleDropAccepted,
            multiple: false
          }}
        />
      case POST_CREATION_VIEWS.PREVIEW:
        return <PostCreationPreview
          onChangeDescription={_handleChangeDescription}
          {...post}
        />
      default:
        return null
    }
  }, [_handleChangeDescription, _handleDropAccepted, post])

  const isPreview = useMemo(() => post.view === POST_CREATION_VIEWS.PREVIEW, [post.view])

  const _handleCreateaPost = useCallback(() => {
    console.log({ post })
  }, [])

  return (
    <Dialog
      PaperProps={{
        className: classes.paper
      }}
      onClose={onClose}
      open={open}>
      <DialogTitle
        className={clsx(classes.dialogTitle, {
          [classes.spaceBetween]: isPreview
        })}
      >
        {(isPreview) && (
          <IconButton
            onClick={_handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
        )}

        Crear una nueva publicación

        {(isPreview) && (
          <Button
            onClick={_handleCreateaPost}
            disabled={!post.media || !post.description}
          >
            Compartir
          </Button>
        )}
      </DialogTitle>

      <DialogContent
        className={classes.dialogContent}
        dividers>
        {view}
      </DialogContent>
    </Dialog>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  dialogContent: {
    minWidth: 500,
    minHeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .dropzone': {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    '&.MuiDialogContent-root': {
      padding: spacing(0)
    }
  },
  paper: {
    width: '80%',
    borderRadius: spacing(1.5),
    '&.MuiPaper-root.MuiDialog-paper': {
      maxWidth: 'unset'
    }
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
}), { name: 'CreatePost' })

export default CreatePost
