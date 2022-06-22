import './NavBar.css';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';


//UpperCase

    const NavBar = () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

    const categories = ["Fuerte", "Medio", "Suave"]

    return (
        <AppBar position="static" className="header-appbar" >
        <Toolbar className="navbar">
            <div className="container-logo">
            <img src="./logo-coffee.png" />
            </div>
            <div className='navbar'>
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link to='/' className='btn-navbar'> Inicio</Link> </Button>
                        <Button className='btn-navbar' id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > 
                            <Link to='/products/:category' className='btn-navbar' > Nuestros Cafés</Link>
                        </Button>    
                            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button',}}>
                                {categories.map((cat)=>{
                                    return <MenuItem onClick={handleClose}> <Link to={`/products/${cat}`} > {cat} </Link> </MenuItem>
                                })}
                            </Menu>

                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link className='btn-navbar' to='/Preguntas'> Preguntas Frecuentes</Link> </Button>
                        
                        <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='contained' > <Link className='btn-navbar' to='/contact'> Contacto</Link> </Button>
            </div>
            <div> 
                <Button>
                <Link to={'/cart'}>  <CartWidget/> </Link>
                </Button>
                
            </div>
                
        </Toolbar>
        </AppBar>
        
            );
        };

export default NavBar