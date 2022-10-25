import { Container, Navbar as NavbarBts } from 'react-bootstrap'

const Navbar = () => {
  return (
    <NavbarBts bg='light'>
      <Container>
        <NavbarBts.Brand href='#home'>Welcome</NavbarBts.Brand>
        <NavbarBts.Toggle />
        <NavbarBts.Collapse className='justify-content-end'>
          <NavbarBts.Text>
            Signed in as: <a href='#login'>Thineshraj</a>
          </NavbarBts.Text>
        </NavbarBts.Collapse>
      </Container>
    </NavbarBts>
  )
}

export default Navbar
