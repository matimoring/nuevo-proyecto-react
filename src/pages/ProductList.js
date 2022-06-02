
import CardListContainer from '../components/CardListContainer/CardListContainer';
import { useParams } from 'react-router-dom';
import productos from '../utils/productsMock'
import { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category,} = useParams()

    useEffect(()=>{
        setProducts([])
        console.log("category: ", category)
        getProducts2()
        .then((response)=>{
            filterByCategory(response)
        })
        }, [category])

    const getProducts2 = () =>{
        return new Promise ((resolve, reject)=>{
            resolve(productos)
        })
    }

    const filterByCategory = (array) => {
        return array.map((item) => {
            if(item.category == category) {
                return setProducts(products=>[...products,item])
            }
        })
    }
    return ( 
        <div className="general-container"> Pagina filtrada
        <CardList products={products} />
        </div>
    )
}

export default ProductList