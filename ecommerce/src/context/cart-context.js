import { Children, createContext, useContext, useReducer } from "react";
import { cartReducer } from '../reducer/cart-reducer';

const initialValue = {
    cart: []
}

const CartContext = createContext(initialValue);

const CartProvider = ({Children}) => {
    
    const [{ cart }, cartDispatch] = useReducer(cartReducer, initialValue);

    return (
        <CartContext.Provider value={{ cart, cartDispatch }}>
            {Children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart}