import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartlistItems] = useState([])

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto ", product)
            return setCartlistItems(cartListItems => [...cartListItems,product])
        }
        console.log("El producto ya esta en el carrito")
    
    }

    const data = {
        cartListItems,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }