import React, {useState, useEffect} from 'react'
import {Button, InputLabel,Input, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Checkout.css'

const isEmpty = (value) => value.trim() ==="";
const isTenChars = (value) => value.trim().length === 10;

const Checkout = ({setIsCheckout, sumPay, emptyCart, submitOrder, setSubmitOrder}) => {
        const [fName, setFName] = useState("");
        const [lName, setLName] = useState("");
        const [address, setAddress] = useState("");
        const [email, setEmail] = useState("");
        const [city, setCity] = useState("");
        const [phone, setPhone] = useState("");

        useEffect(()=>{
            console.log(submitOrder);
            if (submitOrder === true) {
                emptyCart();
            }
        },[submitOrder])

        const OrderSubmittedForm = () => (
            <div className="orderSubmittedFormArea">
                <p>{`Thanks for your order, ${fName}. We will send you a confirmation email.`}</p>
                <Button className="toHomeBtn" variant="contained" color="primary" onClick={()=>{emptyCart()}} component={Link} to="/">Back to Homepage</Button>
            </div>
        )
        
    const submitHandler = (e) =>{
        e.preventDefault();
        const enteredfNameIsValid = !isEmpty(fName);
        const enteredlNameIsValid = !isEmpty(lName);
        const enteredAddressIsValid = !isEmpty(address);
        const enteredEmailIsValid = !isEmpty(email);
        const enteredCityIsValid = !isEmpty(city);
        const enteredPhoneIsValid = isTenChars(phone);
        
        const formIsValid = (enteredfNameIsValid && enteredlNameIsValid && enteredAddressIsValid && enteredEmailIsValid &&
            enteredCityIsValid && enteredPhoneIsValid)  
        if (formIsValid) {
            console.log("form valid");
            setSubmitOrder(true);
        }    else{
            console.log("form unvalid");
            alert("Order details uncompleted!")
        }
    }

    return (
        <div>
          <div className="checkoutContainer">
            
            {submitOrder ? <OrderSubmittedForm /> : 
            <form class="checkout-form" onSubmit ={(e)=>{submitHandler(e)}} >
                <Typography className="titleForm">CHECKOUT</Typography>
                <div className="userDetails">
                    <div className="classBox">
                        <InputLabel className="inputDetail" htmlFor="firstName">First Name</InputLabel>
                        <Input value={fName} className="textInput" type="text" id="firstName" onChange={(e)=>{setFName(e.target.value)}}/>
                    </div>
                    <div className="classBox">
                        <InputLabel className="inputDetail" htmlFor="lastName">Last Name</InputLabel>
                        <Input value={lName} className="textInput" type="text" id="lastName" onChange={(e)=>{setLName(e.target.value)}}/>
                    </div>
                    <div className="classBox">
                        <InputLabel className="inputDetail" htmlFor="city">City</InputLabel>
                        <Input value={city} className="textInput" type="text" id="city" onChange={(e)=>{setCity(e.target.value)}}/>
                    </div>
                    <div className="classBox">
                        <InputLabel className="inputDetail" htmlFor="address">Address</InputLabel>
                        <Input value={address} className="textInput" type="text" id="address" onChange={(e)=>{setAddress(e.target.value)}}/>
                    </div>
                    <div className="classBox">
                        <InputLabel className="inputDetail" htmlFor="email">Email</InputLabel>
                        <Input value={email} className="textInput" type="text" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="classBox">
                        <InputLabel className="inputDetail" htmlFor="phonex`">Phone Number</InputLabel>
                        <Input value={phone} className="textInput" type="text" id="phone" onChange={(e)=>{setPhone(e.target.value)}}/>   
                    </div>
                    <div className="divBtn">
                        <Button className="backBtn" onClick={()=>{setIsCheckout(false)}} variant="contained" color="secondary">BACK TO CART</Button>
                        <Button className="payBtn" type="submit" variant="contained" color="primary">PAY ${sumPay.toFixed(2)}</Button>
                    </div>
                </div>
            </form>}
          </div>
        </div>
    )
}

export default Checkout
