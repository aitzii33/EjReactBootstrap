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
                    <input type="text" id="name" name="name" className="form-control" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Direccion de email</label>
                    <input className="form-control" type="email" id="email" name="email" onBlur={(e) => validateEmail(e.target.value)} required/>
                </div>
                

                <div className="mb-3">
                    <label className="form-label">Mensage</label>
                    <textarea className="form-control" type="text" id="message" name="message" rows="4" onBlur={(e) => validateMessage(e.target.value)} required></textarea>
                </div>

                <button id="submit-form" type="submit" className="btn btn-primary w-100"> Send </button>
            </form>
            <Footer/>
        </>
    );
}

export default ContactUs;