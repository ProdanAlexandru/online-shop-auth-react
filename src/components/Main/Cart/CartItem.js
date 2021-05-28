import React from 'react'
import {Button} from '@material-ui/core'
import './CartItem.css'

const CartItem = ({item, onRemove, onAdd, onRemoveTotally}) => {
        
    return (
        <div className="cartItem">
            <div className="cartItemImageDiv">
                <img className="cartItemImg" src={item.image} alt=""/>
            </div>
            <div className="cartItemDetails">
                <div className="cartItemTitle">
                        <h4>{item.title}</h4>
                        <span>${item.price.toFixed(2)}</span>
                </div>
                <div className="cartItemTitle">
                        <p>{item.description}</p>   
                </div>
                <div className="cartButtonSection">
                      <Button color="secondary" variant="contained" onClick={()=>{onRemoveTotally(item)}}>REMOVE</Button>
                      <Button onClick={()=>{onRemove(item)}}>-</Button>
                      <strong>{item.qty}</strong>
                      <Button onClick={()=>{onAdd(item)}}>+</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
