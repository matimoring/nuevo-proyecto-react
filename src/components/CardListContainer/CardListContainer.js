import { useEffect, useState } from "react";
import CardList from '../CardList/CardList';
import productos from '../../utils/productsMock'

const CardListContainer = () => {

const [products, setProducts] = useState([])

const getProducts = () => {
    return new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})
}

useEffect(()=>{
    getProducts()
    .then((response) =>{
        setProducts(response)
    })
    .catch((err)=>{   
    })
    .finally(()=>{ 
    })
},[])

return (
    <div className="general-container">
        <CardList title={'Productos Recomendados'} products={products} />
    </div>
)

}

export default CardListContainer