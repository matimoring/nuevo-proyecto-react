import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Button, Container, Grid } from '@mui/material';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import Detalle from './pages/Detalle';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false) 
  }

  return (
    //JSX
    <div className="App">
      <BrowserRouter> 

        <NavBar /> 

        <Routes>
          <Route exact path={'/contact'} element={<Contacto />} />
          <Route exact path='/' element={<Home />}/> 
          <Route exact path={'*'} element={<NotFound/>}  />
          <Route exact path={'/Preguntas'} element={<PreguntasFrecuentes />}/>
          <Route exact path={'/Detalle'} element={<Detalle />}/>
        </Routes> 

      </BrowserRouter>
          <button onClick={() => setOpen(true)}>Novedades</button>
          <Modal handleClose={handleClose} open={open}>
            <p>NO HAY NOVEDADES</p>
          </Modal>
          
    </div>
  );
}

export default App;
