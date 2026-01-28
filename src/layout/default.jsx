import "../App.css";
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

function Main() 
{
  return (
    <>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 texto-izquierda">
                    <form className="mb-6">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label" style={{ color: 'black' }}> Nombre y apellidos </label>
                            <br></br>
                            <input type="text" id="nombre" className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="comentario" className="form-label" > Déjanos tu comentario </label>
                            <br></br>
                            <textarea id="comentario" className="form-control" rows="16" cols='40'></textarea>
                        </div>

                        <div className="d-flex flex-column">
                            <button type="submit" className="btn-v" style={{ marginRight: '5px' }}> Enviar </button>
                            <button type="reset" className="btn-v"> Limpiar </button>
                        </div>
                    </form>
                </div>

                <div className="col-md-6 texto-derecha">
                    <h3 style={{ color: 'black', marginBottom: '1rem' }}> Contacta con nosotros </h3>
                    <p className="texto-contacto" style={{ color: 'black' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                        sapien vitae mi consequat varius. Mauris vel nibh non sapien vehicula
                        egestas. Integer ullamcorper, urna et volutpat aliquet, lorem urna
                        egestas lectus, non interdum neque arcu in mi.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Main;
