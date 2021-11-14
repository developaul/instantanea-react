import { Typography, Theme } from '@mui/material';
import { makeStyles } from "@mui/styles"

interface ServiceProps {
  title: string
  isLastService: boolean
}

const Service = ({ title, isLastService }: ServiceProps) => {

  const classes = useStyles()

  return (
    <Typography
      className={classes.secondary200}
      variant='body1'
    >
      {title}

      {(isLastService) || (
        <>
          &nbsp;
          •
          &nbsp;
        </>
      )}
    </Typography>
  )
}

const useStyles = makeStyles(({ palette }: Theme) => ({
  secondary200: {
    color: palette.secondary[200]
  }
}), { name: 'Service' })

export default Service
