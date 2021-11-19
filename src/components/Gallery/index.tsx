import { memo } from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ShortPublication } from '../../interfaces'

interface GalleryProps {
  publications: ShortPublication[]
}

const Gallery = ({ publications }: GalleryProps) => {

  const classes = useStyles()

  return (
    <ImageList
      gap={32}
      cols={3}
      rowHeight={400}>
      {publications.map(({ media, title, _id }) => (
        <ImageListItem
          className={classes.listItem}
          key={_id}>
          <img
            src={media}
            srcSet={media}
            alt={title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const useStyles = makeStyles(() => ({
  listItem: {
    cursor: 'pointer'
  }
}), { name: 'Gallery' })

export default memo(Gallery)
