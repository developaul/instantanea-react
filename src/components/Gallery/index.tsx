import { memo, useState } from 'react'
import { Dialog, ImageList, ImageListItem } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ShortPublication } from '../../interfaces'

interface GalleryProps {
  publications: ShortPublication[]
}

const Gallery = ({ publications }: GalleryProps) => {

  const classes = useStyles()

  const [publicationIdSelected, setPublicationIdSelected] = useState<string | null>(null)

  const _handleSelectPublicationId = (publicationId: string | null): void => setPublicationIdSelected(publicationId)

  return (
    <>
      <ImageList
        gap={32}
        cols={3}
        rowHeight={400}>
        {publications.map(({ media, title, _id }) => (
          <ImageListItem
            className={classes.listItem}
            onClick={() => _handleSelectPublicationId(_id)}
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

      <Dialog
        onClose={() => _handleSelectPublicationId(null)}
        open={!!publicationIdSelected}>

      </Dialog>
    </>
  )
}

const useStyles = makeStyles(() => ({
  listItem: {
    cursor: 'pointer'
  }
}), { name: 'Gallery' })

export default memo(Gallery)
