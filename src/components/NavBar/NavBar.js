import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
//UpperCase

    const NavBar = () => {
    return (
        <AppBar position="static" className="header-appbar" >
        <Toolbar className="navbar">
            <div className="container-logo">
            <img src="./logo-coffee.png" />
            </div>
            <div className='navbar'>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link className='btn-navbar' to='/'> Inicio</Link> </Button>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link className='btn-navbar' to='/Detalle'> Detalle</Link> </Button>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link className='btn-navbar' to='/Preguntas'> Preguntas Frecuentes</Link> </Button>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link className='btn-navbar' to='/contact'> Contacto</Link> </Button>
            </div>
            <div 
                className="login-boton ">< Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained'>  <ShoppingCartIcon/> </Button>
            </div>
                
        </Toolbar>
        </AppBar>
        
            );
        };

export default NavBar