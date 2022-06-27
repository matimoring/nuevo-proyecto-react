import { Button } from "@mui/material"
import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
import CartContext from "../../context/CartContext"

const ItemDetail = ({data}) =>{
    
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const {addProductToCart} = useContext(CartContext)


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
        setCantidad={setCantidad}
        setShowButton={setShowButton}
        />

        {showButton === true && <Button 
            style={{
            borderRadius: 35,
            backgroundColor: "black",
            padding: "10px 36px",
            fontSize: "15px",
            color: "white"
            
            }} onClick={addProductToCart(data)}>
                    <Link 
                        to='/cart' 
                        style={{textDecorationColor:"white", 
                        color: "white"}} 
                    > Finalizar Compra
                    </Link> 
                </Button>}
        </div>
        </>
    )
}
export default ItemDetail 