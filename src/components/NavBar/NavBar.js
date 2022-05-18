import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme } from '@mui/material/styles';
//UpperCase

    const NavBar = () => {
    return (
        <AppBar position="static" className="header-appbar" >
        <Toolbar className="navbar">
            <div className="container-logo">
            <img src="./logo-coffee.png" />
            </div>
            <div className='navbar'>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' className='btn-navbar'>Productos</Button>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' className='btn-navbar'>Hace tu pedido</Button>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' className='btn-navbar'>Quienes somos?</Button>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' className='btn-navbar'>Contacto</Button>
            </div>
            <div 
                className="login-boton ">< Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained'> 0 <ShoppingCartIcon/> </Button>
            </div>
                
        </Toolbar>
        </AppBar>
        
            );
        };

export default NavBar