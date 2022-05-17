import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from './components/Card/Card';
import { Button, Container, Grid } from '@mui/material';
import CardList from './components/CardList/CardList';
import SnackBar from './components/SnackBar/SnackBar';
import Modal from './components/Modal/Modal';
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false) 
  }

  return (
    //JSX
    
    <div className="App">
      <NavBar /> 
        <div className="general-container">
          <CardList />
        </div>
        <div>
          <SnackBar>
            <p>Se agrego el producto 1</p>
          </SnackBar>
          </div>
          <button onClick={() => setOpen(true)}>Novedades</button>
          <Modal handleClose={handleClose} open={open}>
            <p>NO HAY NOVEDADES</p>
          </Modal>
    </div>
  );
}

export default App;
