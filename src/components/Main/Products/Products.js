import React, {useState, useEffect} from 'react'
import './Products.css'
import ProductItem from './ProductItem'
import {Select, MenuItem, Input} from '@material-ui/core';

const Product = ({productsArray, addToCartHandler}) => {
        const [menu, setMenu] = useState(1);

        const [productsSorted, setProductsSorted] = useState([]);
        
        const [q, setQ] = useState("");

        // const [noItems, setNoItems] = useState(false);   
        useEffect(()=>{
            const sortedArray = type => {
                const types ={
                    title: 'title',
                    price: 'price'
                }
            
            const sortProperty = types[type];
            const sorted = [...productsArray].sort((a,b) =>{
                if (a[sortProperty] < b[sortProperty]){
                    return -1;
                } 
                if (a[sortProperty] > b[sortProperty]) {
                    return 1;
                }
                return 0;
            })
            setProductsSorted(sorted);
            }

            sortedArray(menu);
        },[menu]);

            const productsSearched = productsSorted.filter(product =>
                product.title.toLowerCase().includes(q.toLowerCase()));
            const results = !q
            ? productsSorted
            : productsSearched;

        const updateSelectedVal = (e) => {
            setMenu(e.target.value);
        }

        const onChangeHandler = (e)=>{
            setQ(e.target.value);
        }

        const NoItemsFound = () =>  (
            <div className="noItemsText">
            <p>No products found!</p>
            </div>
            
        );
    return (
        <div className="section">
            <div className="selectArea">
                <Input placeholder="Search..." className="searchInput" value={q} onChange={(e)=>{onChangeHandler(e)}} />
                    <div className="selectSortingDiv">
                        <Select className="sortButton" value={menu} displayEmpty onChange={updateSelectedVal}>
                            <MenuItem value={1}>Sort by</MenuItem>
                            <MenuItem value={'title'}>Name</MenuItem>
                            <MenuItem value={'price'}>Price</MenuItem>
                        </Select>
                    </div>
            </div>
        <div className="productsSection">
            {(productsSearched.length!==0) ? results.map((product)=>(
                <ProductItem key={product.id}
                             product={product}
                             cartHandler= {addToCartHandler}
                /> 
            )) : <NoItemsFound />}
        </div>
        </div>
    )
}

export default Product
