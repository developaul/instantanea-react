import { Avatar, Grid, Typography } from "@mui/material"

const Story = () => {
  return (
    <Grid
      alignItems='center'
      container
      direction="column">
      <Grid item>
        <Avatar />

      </Grid>
      <Grid item>
        <Typography>
          name
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Story
