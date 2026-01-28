import { useNavigate } from 'react-router-dom'

import logo from '../img/logo.png'
import '../css/header.css'

function Header() 
{
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <div className='row'>
          <h1 style={{ fontSize: '40px' }}> ZUBIRI MANTEO </h1>
          <img src={logo} alt="logo" className="imagen-circular img-fluid" style={{ height: '60px', width: '60px' }}/>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <nav className="nav-links d-flex flex-wrap gap-3">
            <a onClick={() => navigate('/')} className="nav-link">Home</a>
            <a onClick={() => navigate('/quien')} className="nav-link">Quienes</a>
            <a onClick={() => navigate('/cursos')} className="nav-link">Cursos</a>
            <a onClick={() => navigate('/situacion')} className="nav-link">Situacion</a>
            <a onClick={() => navigate('/contacto')} className="nav-link">Contacto</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;