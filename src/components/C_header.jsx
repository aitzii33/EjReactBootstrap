import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import logo from '../img/logo.png'
import '../css/header.css'

function Header() 
{
  const navigate = useNavigate();

  return (
    <>
      <div class="col-md-4 col-lg-4 col-xl-8">
        <h1 className="me-3 fs-4 align-items-center">ZUBIRI MANTEO</h1>
        <input className='imagen-circular img-fluid' type="image" src={logo} alt="logo" />
      </div>
      

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
