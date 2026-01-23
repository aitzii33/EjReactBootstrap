import Header from '../components/C_header.jsx'
import Footer from '../components/C_footer.jsx'
import Button from '../components/C_button.jsx'

import '../css/main.css'

function main()
{
    return(
        <body>
            <Header/>
            <div class="row mb-3">
                <div class="col-md-6 mb-4">
                    <form>
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre y apellidos</label>
                            <br></br>
                            <input type="text" id="nombre" class="form-control"/>
                        </div>

                        <div class="mb-3">
                            <label for="comentario" class="form-label">Déjanos tu comentario</label>
                            <br></br>
                            <textarea id="comentario" class="form-control" rows="4"></textarea>
                        </div>

                        <div class="d-flex gap-3">
                            <button type="submit" class="btn btn-primary">Enviar</button>
                            <br></br>
                            <button type="reset" class="btn btn-primary">Limpiar</button>
                        </div>
                    </form>
                </div>

                <div class="col-md-6 mb-4">
                    <label class="form-label">
                        Bootstrap es uno de los frameworks más populares para el desarrollo web front-end, 
                        lanzado inicialmente por Twitter en 2011 con el objetivo de facilitar la creación de sitios y aplicaciones responsivas y modernas. 
                        Utiliza HTML, CSS y JavaScript para ofrecer una amplia gama de componentes reutilizables, como botones, menús, formularios, 
                        cartas y barras de navegación, lo que permite un diseño consistente y atractivo sin necesidad de grandes conocimientos de diseño.

                        Uno de los aspectos más útiles de Bootstrap es su sistema de rejilla (grid system), 
                        basado en filas y columnas flexibles que se adaptan automáticamente a distintos tamaños de pantalla. 
                        Esto garantiza que los sitios web luzcan bien y sean funcionales en dispositivos móviles, tabletas y ordenadores de escritorio. 
                        Además, Bootstrap integra estándares de accesibilidad y estilos predeterminados que ayudan a un desarrollo más rápido y eficaz. 
                        Permite la personalización a través de variables CSS y clases utilitarias, de modo que los desarrolladores pueden modificar colores, 
                        espacios y otros aspectos visuales según sus necesidades específicas.
                    </label>
                </div>
            </div>

            <div class="row">
                <div class="col text-center pt-3">
                    ZUBIRI MANTEO
                </div>
            </div>
        </body>
    );
}

export default main;