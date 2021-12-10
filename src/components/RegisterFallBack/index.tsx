import {
  Card,
  Container,
  Grid,
  Skeleton,
  Theme,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import clsx from 'clsx';

const RegisterFallBack = () => {
  const classes = useStyles()

  return (
    <Container
      maxWidth={'xs'}
      className={classes.container}
    >
      <Grid
        direction='column'
        rowGap={2}
        container
      >
        <Grid
          width='100%'
          item
        >
          <Card
            className={classes.card}
          >
            <Skeleton
              height={45}
              className={classes.logo}
              variant='rectangular'
            />
            <Skeleton
              width={200}
              className={classes.center}
              variant='text'
            />
            <Skeleton
              width={100}
              className={classes.center}
              variant='text'
            />

            <Skeleton
              className={clsx(classes.center, classes.marginTop, classes.marginBottom)}
              variant='text'
            />

            <Grid
              rowGap={2}
              direction='column'
              container>
              <Grid
                rowGap={1}
                direction='column'
                container
                item
              >
                <Grid item>
                  <Skeleton
                    height={40}
                    variant='rectangular'
                  />
                </Grid>
                <Grid item>
                  <Skeleton
                    height={40}
                    variant='rectangular'
                  />
                </Grid>
                <Grid item>
                  <Skeleton
                    height={40}
                    variant='rectangular'
                  />
                </Grid>
                <Grid item>
                  <Skeleton
                    height={40}
                    variant='rectangular'
                  />
                </Grid>

                <Grid item>
                  <Skeleton
                    height={40}
                    variant='rectangular'
                  />
                </Grid>
              </Grid>

              <Grid item>
                <Skeleton
                  className={classes.button}
                  height={35}
                  variant='rectangular'
                />
              </Grid>
            </Grid>

            <Skeleton
              height={32}
            />

            <Skeleton
              height={20}
            />
          </Card>
        </Grid>

        <Grid
          width='100%'
          item
        >
          <Card className={classes.footerCard}>
            <Skeleton />
          </Card>
        </Grid>

        <Grid
          width='100%'
          item
        >
          <Skeleton
            className={classes.center}
            width={140} />
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    marginTop: spacing(8)
  },
  card: {
    padding: spacing(4, 5, 2, 5)
  },
  footerCard: {
    padding: spacing(2, 5)
  },
  logo: {
    marginBottom: spacing(3)
  },
  button: {
    marginBottom: spacing(3)
  },
  center: {
    margin: '0 auto'
  },
  marginTop: {
    '&.MuiSkeleton-root': {
      marginTop: spacing(2)
    }
  },
  marginBottom: {
    '&.MuiSkeleton-root': {
      marginBottom: spacing(2)
    }
  }
}), { name: 'RegisterFallBack' })


export default RegisterFallBack
