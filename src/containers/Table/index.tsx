import { useCallback, useState } from "react"
import { Container, Grid } from "@mui/material"

import TableMenu from "../../components/TableMenu"

import { defaultMenuItems } from "../../utils/constans"
import { MenuItem } from "../../interfaces"

const Table = () => {
  const [menuItemActive, setMenuItemActive] = useState<MenuItem>(() => defaultMenuItems[0])

  const _handleSelectMenuItem = useCallback((menuItem: MenuItem): void => {
    setMenuItemActive(menuItem)
  }, [])

  return (
    <Container>
      <Grid
        direction='column'
        container
        xs
      >
        <Grid
          container
          item
          xs>
          <TableMenu
            onSelectMenuItem={_handleSelectMenuItem}
            menuItemActive={menuItemActive}
          />
        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Table
