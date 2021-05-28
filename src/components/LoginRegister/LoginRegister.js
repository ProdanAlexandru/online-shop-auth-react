import React, {useState, useEffect} from 'react'
import Register from './Register/Register'
import Login from './Login/Login'
import '../LoginRegister/LoginRegister.css';
import {Link} from 'react-router-dom'
import {Button, IconButton, Typography} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { AuthProvider } from '../../contexts/AuthContext'

const LoginArea = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);

    useEffect(()=>{
        if (isLogin) {
            setIsRegister(!isLogin);
        }
    },[isLogin]);

    useEffect(()=>{
        if (isRegister) {
            setIsLogin(!isRegister);
        }
    },[isRegister])
    
    return (
        <AuthProvider>
            <div className="login-container">
                <div className="login-register-div">
                    <IconButton className="buttonTitle" onClick={()=>{setIsLogin(true)}}>
                        <Typography className={isLogin ? 'buttonTitleOnFocus' : 'login-title'}>LOGIN</Typography>
                    </IconButton>
                    <IconButton className="buttonTitle" onClick={()=>{setIsRegister(true)}}>
                        <Typography className={isRegister ? 'buttonTitleOnFocus' : 'login-title'}>REGISTER</Typography>
                    </IconButton>
                </div>
                {
                    isLogin ? 
                    <Login /> :
                    <Register setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
                }
            </div>
            <div className="gohomebtn-div">
                <Button variant="outlined" className="gohomeButton" component = {Link} to ="/"><ArrowBackIcon className="arrowIcon"/>back to shopping</Button>
            </div>
        </AuthProvider>
    )
}

export default LoginArea
