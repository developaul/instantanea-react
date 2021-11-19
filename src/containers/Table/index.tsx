import { useCallback, useState } from "react"
import { Container, Grid } from "@mui/material"

import TableMenu from "../../components/TableMenu"

import { defaultMenuItems } from "../../utils/constans"
import { MenuItem } from "../../interfaces"
import TableContent from "../../components/TableContent"

const Table = () => {
  const [menuItemActive, setMenuItemActive] = useState<MenuItem>(() => defaultMenuItems[0])

  const _handleSelectMenuItem = useCallback((menuItem: MenuItem): void => {
    setMenuItemActive(menuItem)
  }, [])

  return (
    <Container>
      <Grid
        rowSpacing={2}
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
        <Grid item xs>
          <TableContent />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Table
