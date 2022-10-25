import Navbar from '../../components/Navbar/Navbar'
import MenuItem from '../../components/MenuItem/MenuItem'

import { Container, Grid } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'

const MENU_LISTS = [
  {
    icon: <HomeIcon sx={{ fontSize: 100, textAlign: 'center' }} />,
    title: 'Application',
    description: 'All information about your application',
  },
  {
    icon: <HomeIcon sx={{ fontSize: 100, textAlign: 'center' }} />,
    title: 'Payment',
    description: 'All information about your payments',
  },
  {
    icon: <HomeIcon sx={{ fontSize: 100, textAlign: 'center' }} />,
    title: 'Application',
    description: 'All information about your application',
  },
  {
    icon: <HomeIcon sx={{ fontSize: 100, textAlign: 'center' }} />,
    title: 'Application',
    description: 'All information about your application',
  },
  {
    icon: <HomeIcon sx={{ fontSize: 100, textAlign: 'center' }} />,
    title: 'Application',
    description: 'All information about your application',
  },
  {
    icon: <HomeIcon sx={{ fontSize: 100, textAlign: 'center' }} />,
    title: 'Application',
    description: 'All information about your application',
  },
]

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='lg' sx={{ marginTop: 5 }}>
        <Grid
          spacing={2}
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {MENU_LISTS.map((item) => {
            return (
              <Grid item lg={3}>
                <MenuItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Home
