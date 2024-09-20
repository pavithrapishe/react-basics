import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Itemlist from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cartt = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log('cartItems', cartItems)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center p-4 m-4 ">
            <h1 className="text-2xl font-bold"> Cart</h1>
            <div className="w-6/12  m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    {' '}
                    Clear cart
                </button>
                {cartItems.length === 0 && (
                    <h1>Cart is empty! Add items to the cart!</h1>
                )}
                <Itemlist items={cartItems}></Itemlist>
            </div>
        </div>
    )
}

export default Cartt
