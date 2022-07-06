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
import Cart from './pages/Cart'
import Detalle from './pages/Detalle';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ProductList from './pages/ProductList';
import ThemeProvider from './context/ThemeContext';
import {CartProvider} from './context/CartContext';
import Footer from './components/Footer/Footer';


function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false) 
  }

  return (
    //JSX
    <div className="App">
      <CartProvider>
        <ThemeProvider >
          <BrowserRouter> 
            <NavBar /> 
            <Routes>
              <Route exact path={'/contact'} element={<Contacto />} />
              <Route exact path='/' element={<Home />}/> 
              <Route exact path={'*'} element={<NotFound/>}  />
              <Route exact path={'/preguntas'} element={<PreguntasFrecuentes />}/>
              <Route exact path={'/product/:id'} element={<Detalle/>}/>
              <Route exact path={'/products/:category'} element={<ProductList />}/>
              <Route exact path={'/cart'} element={<Cart />}/>
            </Routes> 
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>      
    </div>
  );
}

export default App;
