import '../css/contacto.css'

import Header from '../components/C_header'
import Footer from '../components/C_footer'


function ContactUs()
{
    return(
        <>
            <Header/>
            <form id="contact-form" action="mail.php" method="POST" className="p-4 border rounded shadow-sm bg-white">
                <h2 className="text-center mb-4">Contactanos</h2>

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <br></br>
                    <input type="text" id="name" name="name" className="form-control" style={{ width: '430px' }} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Direccion de email</label>
                    <br></br>
                    <input className="form-control" type="email" id="email" name="email" style={{ width: '430px' }} required/>
                </div>
                //

                <div className="mb-3">
                    <label className="form-label">Mensage</label>
                    <br></br>
                    <textarea className="form-control" type="text" id="message" name="message" rows="10" cols='60' required></textarea>
                </div>

                <button id="submit-form" type="submit" className="btn btn-primary w-100"> Send </button>
            </form>
            <Footer/>
        </>
    );
}

export default ContactUs;