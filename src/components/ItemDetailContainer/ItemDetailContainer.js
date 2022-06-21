import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../utils/productsMock";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {doc, getDoc} from 'firebase/firestore' 
import db from '../../utils/FirebaseConfig' 

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})

    //const getItem = () =>{
    //return new Promise( (resolve, reject)=> {
    //        setTimeout(()=>{
    //            resolve(producto)
    //        },2000)
    //    })
    //}

    useEffect(()=>{

        getProduct()
        .then((prod)=>{
            console.log("respuesta GetItem: ", prod)
            setProduct(prod)
        })
    //  setProduct( productFilter)
    }, [id])
    
    const getProduct = async () => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product

    }


    const productFilter = productos.find( (product) => {
        return product.id == id
    })
    
    return (
        <>  
        
            <ItemDetail data={product}/>
        </>
    )
} 

export default ItemDetailContainer;
