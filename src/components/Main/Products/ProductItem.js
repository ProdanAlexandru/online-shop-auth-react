import React from 'react'
import "./ProductItem.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {IconButton} from '@material-ui/core'
import StarRating from './StarRating'

const ProductItem = ({product, cartHandler}) => {
    const price = `$${product.price.toFixed(2)}`;
    
    return (
        <div className="productItem">
            <div className="productImageDiv">
                <img className="productItemImg" src={product.image} alt=""/>
            </div>
                <div className="description">
                        <h4>{product.title}</h4>
                        <span>{price}</span>
                        <p>{product.description}</p>
                        <StarRating/>
                </div>
                <div className="buttonSection">
                        <IconButton onClick={()=>cartHandler(product)} >
                            <AddShoppingCartIcon className="addToCartIcon"/>
                        </IconButton>
                </div>
        </div>
    )
}

export default ProductItem
