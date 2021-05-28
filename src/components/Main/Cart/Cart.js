import React, {useState} from 'react'
import './Cart.css'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Cart = ({cart, removeFromCartHandler, addToCartHandler, removeTotally, setCart}) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [submitOrder, setSubmitOrder] = useState(false);

    const cartItemsSubtotal = cart.reduce((first, second)=> first + second.price * second.qty,0);

    const cartItems = cart.map((item)=> (
        <CartItem key= {item.id}
                  item={item}
                  onRemove= {removeFromCartHandler}
                  onAdd={addToCartHandler}
                  onRemoveTotally={removeTotally}/>
    ))
    const emptyCart = () => {
        setCart([]);
    }
    const ShowEmptyShoppingCart = () => (
        <div className="textDiv">
        <Typography className="textCart">Your cart is empty. <Link className="linkText" to ="/">Start buying!</Link></Typography>
        </div>
    )
    const handleCheckout = () => {
        setIsCheckout(true);
    }
    const ShowShoppingCart = () =>(
        <div>
            <div className="cartItemsSection">
                    {cartItems}
            </div>   
            <div className="orderSummary">
                <div className="footerCart">
                    <Typography variant="h5">SUBTOTAL : ${cartItemsSubtotal.toFixed(2    )}</Typography>
                    <div className="btnSection">
                        <Button onClick ={()=>{emptyCart()}} variant="contained" color="secondary">EMPTY CART</Button>
                        <Button onClick={()=>{handleCheckout()}} variant="contained" color="primary">CHECKOUT</Button>
                    </div>
                </div>
            </div>
        </div>
        )
        if (cart.length ===0 && !submitOrder) return <ShowEmptyShoppingCart/>
        return (
            <div>
            {!isCheckout ? <ShowShoppingCart /> : <Checkout emptyCart={emptyCart} setIsCheckout={setIsCheckout} sumPay={cartItemsSubtotal} submitOrder={submitOrder} setSubmitOrder={setSubmitOrder}/>}
            </div>
        )
}
export default Cart
