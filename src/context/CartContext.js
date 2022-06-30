import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartlistItems] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, cantidad) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto ", product)
            setTotalPrice(totalPrice + product.price * product.cantidad )
            return setCartlistItems(cartListItems => [...cartListItems,product])
        }
        console.log("El producto ya esta en el carrito")
    
    }

    const deleteProduct = (product) =>{
        setCartlistItems(cartListItems.filter((cartProduct)=>cartProduct.id !== product.id))
    }

    const cleanCartOrder = () =>{
        setTotalPrice(0)
        setCartlistItems([])
    }


    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartOrder,
        deleteProduct,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }