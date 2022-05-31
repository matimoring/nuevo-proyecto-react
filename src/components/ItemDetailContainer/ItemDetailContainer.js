import ItemDetail from "../ItemDetail/ItemDetail";
import { producto } from "../../utils/productsMock";

import { useEffect, useState } from "react";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const getItem = () =>{
        return new Promise( (resolve, reject)=> {
            setTimeout(()=>{
                resolve(producto)
            },2000)
        })
    }
    
    useEffect(()=>{
        getItem()
        .then((res)=>{
            console.log("respuesta GetItem: ", res)
            setProduct(res)
        })
    })
    
    return (
        <>
        <div> Contenedor Item </div>
            <ItemDetail data={product}/>
        </>
    )
} 

export default ItemDetailContainer;
