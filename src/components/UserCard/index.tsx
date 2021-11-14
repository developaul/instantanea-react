import { Avatar, Button, Grid, Typography } from "@mui/material"

const UserCard = () => {
  return (
    <Grid
      alignItems="center"
      justifyContent="space-between"
      container
    >
      <Grid item>
        <Grid container>
          <Grid item>
            <Avatar
              alt="Paul Chávez"
              sx={{ width: 48, height: 48 }}
            >
              P
            </Avatar>
          </Grid>

          <Grid item>
            <Typography variant="h6">
              Paul
            </Typography>
            <Typography>
              developaul
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          variant="text"
        >
          Cambiar
        </Button>
      </Grid>
    </Grid>
  )
}

export default UserCard
