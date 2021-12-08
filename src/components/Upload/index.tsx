import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material'
import { DropzoneOptions, useDropzone } from 'react-dropzone';

interface Props {
  dropzoneOptions: DropzoneOptions
}

const Upload = ({ dropzoneOptions }: Props) => {
  const classes = useStyles()

  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions);

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <div className={classes.dropzoneContent}>
        <CloudUploadIcon fontSize='large' color='primary' />
        <Typography align='center' >
          Arrastra las fotos aquí
        </Typography>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  dropzoneContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
}), { name: 'Upload' })


export default Upload
