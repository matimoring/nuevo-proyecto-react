import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

//UpperCase

const NavBar = () =>{
    return (
        
            <AppBar position="static">
            <Toolbar className="navbar">
                <div className="container-logo">
                    <img src="./cafelogo2.png"/>
                </div>
                <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Productos</button>
                </li>
                <li>
                    <button>Contacto</button>
                </li>
                <li>
                    <button>Preguntas frecuentes</button>
                </li>
                </ul>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
    );
}

export default NavBar