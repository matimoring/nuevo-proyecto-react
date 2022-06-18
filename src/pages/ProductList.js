
import CardListContainer from '../components/CardListContainer/CardListContainer';
import { useParams } from 'react-router-dom';
import productos from '../utils/productsMock'
import { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import { CircularProgress } from '@mui/material';
//Firestore
import { collection, getDocs } from '@firebase/firestore';
import db from '../utils/FirebaseConfig'


const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category,} = useParams()

    useEffect(()=>{
        setProducts([])
        console.log([])
        console.log()
        getProducts2()
        .then( (productos)=>{
            console.log("productos: ", productos)
            category ? filterByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

        const getProducts2 = async () => {
            const productSnapshot = await getDocs(collection(db, "productos"));
            const productList = productSnapshot.docs.map((doc)=> {
                let product = doc.data()
                product.id = doc.id
                console.log("doc: ", doc)
                return doc.data()
            })
            return productList
        }
        
        
        

//    const getProducts2 = () =>{
//        return new Promise ((resolve, reject)=>{
//            resolve(productos)
//        })
//    }

    const filterByCategory = (array) => {
        return array.map((item) => {
            if(item.category == category) {
                return setProducts(products=>[...products,item])
            }
        })
    }
    return ( 
        <div className="general-container"> 
        
        <div>
            <span><CircularProgress/> </span> 
        </div>
        <div>
            <div></div>
        </div>
        
        <CardList products={products} />
        </div>
    )
}

export default ProductList