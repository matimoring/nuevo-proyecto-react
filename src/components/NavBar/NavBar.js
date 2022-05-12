import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

//UpperCase

    const NavBar = () => {
    return (
        <AppBar position="static">
        <Toolbar className="navbar">
            <div className="container-logo">
            <img src="./logo-coffee.png" />
            </div>
            <div className="navbar-menu">
            <button className="btn-navbar">Nuestros productos</button>
            <button className="btn-navbar">Hace tu pedido</button>
            <button className="btn-navbar">Contacto</button>
            </div>
            <Button >Login</Button>
        </Toolbar>
        </AppBar>
            );
        };

export default NavBar