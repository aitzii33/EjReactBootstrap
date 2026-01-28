import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './layout/inicio.jsx';
import Contacto from './layout/contactos.jsx';
import Cursos from './layout/cursos.jsx';
import Quien from './layout/quien.jsx';
import Situacion from './layout/situacion.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/quien" element={<Quien />} />
      <Route path="/situacion" element={<Situacion />} />
    </Routes>
  );
}

export default App;
