import React from 'react'
import {IconButton} from '@material-ui/core'

const SuccesRegister = ({setIsLogin, setIsRegister}) => {
    const handleOnClick = () => {
        setIsRegister(false);
        setIsLogin(true);
    }

    return (
        <div>
            <h1 className="succes-register-message">Thank you for registering!</h1>
            <h4 className="succes-register-message"><IconButton className="succes-register-message" onClick={handleOnClick}>Go to LOGIN</IconButton></h4>
        </div>
    )
}

export default SuccesRegister
