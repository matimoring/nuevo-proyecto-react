import { useEffect, useState } from "react";
import CardList from '../CardList/CardList';

const CardListContainer = () => {

const [products, setProducts] = useState([])
const productos = [
    {
        title : 'Café Colombia fuerte',
        price : 305,
        image : 'cafe-fuerte.png',
        description : 'Café Colombia fuerte',
        stock: 14,
        id: 1,
    },
    {
        title : 'Café Camboya fuerte',
        price : 805,
        image : 'cafe1.png',
        description : 'Café Camboya fuerte',
        stock: 12,
        id: 2,
    },
    {
        title : 'Café Idonesia fuerte',
        price : 945,
        image : 'cafe2.png',
        description : 'Café Idonesia fuerte',
        stock: 15,
        id: 3,
    },
    {
        title : 'Café Brasil fuerte',
        price : 390,
        image : 'cafe3.png',
        description : 'Café Brasil fuerte',
        stock: 11,
        id: 4,
    },
    {
        title : 'Café Brasil medio',
        price : 370,
        image : 'cafe-medio.png',
        description : 'Café Brasil medio',
        stock: 18,
        id: 5,
    },
    {
        title : 'Cafe Nicaragua suave',
        price : 440,
        image : 'cafe-suave.png',
        description : 'Café Nicaragua medio',
        stock: 1,
        id: 6,
    },
    {
        title : 'Café Brasil extra suave',
        price : 455,
        image : 'cafe-extrasuave.png',
        description : 'Café Brasil extra suave',
        stock: 19,
        id: 7,
    },
    {
        title : 'Café Indonesia suave',
        price : 900,
        image : 'cafe5.png',
        description : 'Café Indonesia suave',
        stock: 23,
        id: 8,
    },
    {
        title : 'Cafe Colombia extra suave',
        price : 444,
        image : 'cafe4.png',
        description : 'Café Colombia extra suave',
        stock: 23,
        id: 9
    }
]
const getProducts = () => {
    return new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})
}

useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("respuensta: ", data)
})
}, [])
//useEffect(()=>{
   // getProducts()
    //.then((response) =>{
    //    setProducts(response)
    //})
    //.catch((err)=>{   
    //})
    //.finally(()=>{ 
    //})
//},[])

useEffect (()=>{
    async function getProductsAsincrono(){
        const productos = await getProducts()
        //console.log("productos asincrono:", productos)
    }
})

return (

    <CardList products={productos} />

)

}

export default CardListContainer