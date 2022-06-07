import Button from '@mui/material/Button';
import { useState } from 'react';


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
        <Button variant={'outlined'}  onClick={()=>setShowButton(true)}>Agregar Producto</Button>
        </>
    );
    };

export default ItemCount;