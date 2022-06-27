import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';


const ItemCount = ({cantidad, setCantidad, setShowButton}) => {

    
    const addCount = () => {
        setCantidad(cantidad + 1)

    };
    const restCount = () => {
        setCantidad(cantidad - 1)

    };

    return (
        <>
        <div  className="count-item">
            <Button onClick={restCount} > - </Button>
            <p> {cantidad} </p>
            <Button onClick={addCount}> + </Button>
        </div>
        <div className= "cart-checkout-details button">
        <Button 
            onClick={()=>{setShowButton(true)}}
            >    
            Agregar al carrito 
        </Button>
        </div>
        </>
    );
    };

export default ItemCount;