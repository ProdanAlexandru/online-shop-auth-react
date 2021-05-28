import React from 'react'
import './Header.css'
import{ IconButton , Typography, Badge }from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useLocation } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = ({cartLength}) => {
    
    const location = useLocation();

    return (
        <div className="headerSection" >
            <div className="titleSection">
                <Typography className="titleText" component = {Link} to= "/">
                    <img className="headerLogo" 
                        src="assets/shopping-online.jpg" 
                        alt=""/>
                    Speed Yourself
                </Typography>
            </div>
            <div className="accountArea">
                <IconButton component = {Link} to= "/login" >
                    <AccountCircleIcon className="accountIcon"/>
                </IconButton>
            </div>
            <div className="cartIconArea">
                {location.pathname === '/' && <IconButton component = {Link} to= "/cart">
                    <Badge badgeContent={cartLength} color="secondary">
                        <ShoppingCartIcon className="cartIcon"/>
                    </Badge>
                </IconButton>}
            </div>
        </div>
    )
}

export default Header
