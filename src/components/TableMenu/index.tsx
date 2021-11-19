import { memo } from 'react'
import { Button, Divider, Grid, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import clsx from "clsx"

import { MenuItem } from "../../interfaces"
import { defaultMenuItems } from '../../utils/constans'

interface TableMenuProps {
  menuItemActive: MenuItem,
  onSelectMenuItem: (menuItem: MenuItem) => void
}

const TableMenu = ({ menuItemActive, onSelectMenuItem }: TableMenuProps) => {
  const classes = useStyles()

  return (
    <>
      {
        defaultMenuItems.map(({ _id, label }) => {
          const isActived = (menuItemActive._id === _id)

          return (
            <Grid
              xs
              key={_id}
              item
              flex={1}
            >
              <Divider className={clsx({ [classes.dividerItemActived]: isActived })} />
              <Button
                className={clsx({ [classes.buttonItemActived]: isActived })}
                onClick={() => onSelectMenuItem({ label, _id })}
                color='secondary'
                fullWidth>
                {label}
              </Button>
            </Grid>
          )
        })
      }
    </>
  )
}

const useStyles = makeStyles(({ palette }: Theme) => ({
  dividerItemActived: {
    '&.MuiDivider-root': {
      borderColor: palette.common.black
    }
  },
  buttonItemActived: {
    '&.MuiButton-text': {
      color: palette.common.black
    }
  }
}), { name: 'TableMenu' })

export default memo(TableMenu)
