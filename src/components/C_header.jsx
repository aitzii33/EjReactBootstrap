import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import logo from '../img/logo.png'

function Header() 
{
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">ZUBIRI MANTEO</h1>
      <input type="image" src={logo} alt="logo" />

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/quien')}>Quienes</Nav.Link>
            <Nav.Link onClick={() => navigate('/cursos')}>Cursos</Nav.Link>
            <Nav.Link onClick={() => navigate('/situacion')}>Situacion</Nav.Link>
            <Nav.Link onClick={() => navigate('/contacto')}>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
