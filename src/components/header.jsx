import image from '../image/logo.png';

function Header()
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: '48px', color: 'black', fontWeight: '600' }}> ZUBIRI MANTEO </span>
                    <img src={image} className="imagen-circular img-fluid" alt="Logo" style={{ width: '60px', height: '60px' }}/>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <nav className="d-flex">
                        <a className="btn-v me-3" href="#">Inicio</a>
                        <a className="btn-v me-3" href="#">Quienes</a>
                        <a className="btn-v me-3" href="#">Cursos</a>
                        <a className="btn-v me-3" href="#">Situación</a>
                        <a className="btn-v" href="#">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
