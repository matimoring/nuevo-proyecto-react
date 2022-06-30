import { Button } from '@mui/material';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom'
import './ItemCount.css'


const ItemCount = ({data}) => {
    const {addProductToCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    
    const addCount = () => {
        setCantidad(cantidad + 1)

    };
    const restCount = () => {
        setCantidad(cantidad - 1)

    };

    const addToCart = (data) => {
        setShowButton(true)
        let product = data
        data.cantidad = cantidad
        addProductToCart(product)    
    }


    return (
        <>
        <div  className="count-item">
            <Button onClick={restCount} > - </Button>
            <p> {cantidad} </p>
            <Button onClick={addCount}> + </Button>
        </div>
        <div className="btn-custom-card-ItemCount button" >
        { ! showButton ? <Button 
                            onClick={()=>{addToCart(data)}}>
                            AGREGAR AL CARRITO
                        </Button>
                        : 
                        <Button disableRipple style={{ backgroundColor: 'black' }} variant='contained' > 
                            <Link to='/cart' 
                                style={{ color: "gold", backgroundColor:"black"}} 
                                > FINALIZAR COMPRA
                            </Link> 
                        </Button>
                        }
                        <div style={{marginBottom:"5px"}}>
                        <Button disableRipple style={{ backgroundColor: 'black' }} variant='contained' > 
                            <Link to='/' 
                                style={{ color: "white", backgroundColor:"black", textDecoration:"none"}} 
                                > SEGUIR COMPRANDO
                            </Link> 
                        </Button>
                        </div>
        </div>
        </>
    );
                    }
export default ItemCount;