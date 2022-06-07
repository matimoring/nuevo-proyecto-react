import { Button } from "@mui/material"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'

const ItemDetail = ({data}) =>{
    
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const addProductToCart = () =>{
        console.log("PRODUCTO AGREGADO AL CARRO", data)
        console.log("Cantidad: ", cantidad) 
    }


    return (
        <>
        <div className="card-detail">
            <div>
                <img src={`../${data.image}`}/>
            </div>
            <h2>{data.title}</h2>
            <p>$ {data.price}</p>

        <ItemCount

        cantidad={cantidad}
        setShowButton={setShowButton}
        setCantidad={setCantidad}
        />

        {showButton == true && <Button variant={'outlined'}  onClick={addProductToCart()}><Link to='/cart'> Finalizar Compra</Link> </Button>}
        </div>
        </>
    )
}
export default ItemDetail 