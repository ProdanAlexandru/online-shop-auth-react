import React, {useState} from 'react'
import SuccesRegister from './SuccesRegister'
import {Button} from '@material-ui/core'
import InputField from '../../UI Components/InputField'
import {useAuth} from '../../../contexts/AuthContext' 
import {userSchema} from './validation'
import {Formik, Form} from 'formik'

import '../../LoginRegister/LoginRegister.css'

const Register = ({setIsLogin, setIsRegister}) => {

    const { handleSignup, currentUser, emailError, succesRegistered } = useAuth(); 
    
    const [loading, setLoading] = useState(false);

    return (
        <>
        {!succesRegistered ? <Formik
            initialValues ={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema = {userSchema}
            onSubmit = { async (values) => {
                try {
                    setLoading(true);
                    handleSignup(values.email, values.password)
                } catch {
                    console.log("Failed to register");
                }
                setLoading(false);
            }}
        >
        {formik => (
            <Form className="register-form">
            <div className="loginDetails">
                <InputField  
                    htmlFor="firstName" 
                    label="*First Name"
                    id="outlined-basic 1"
                    size="small"
                    variant="outlined"
                    name="firstname"
                    type="text"
                />
                <InputField  
                    htmlFor="lastName" 
                    label="*Last Name"
                    id="outlined-basic 2"
                    size="small"
                    variant="outlined"
                    name="lastname"
                    type="text"
                />
                <InputField  
                    htmlFor="email" 
                    label="*Email Address"
                    id="outlined-basic 3"
                    size="small"
                    variant="outlined"
                    name="email"
                    type="text"
                />
                <InputField 
                    htmlFor="password" 
                    label="*Password"
                    id="outlined-basic 4"
                    size="small"
                    variant="outlined"
                    name="password"
                    type="password"
                />
                <InputField 
                    htmlFor="confirmPassword" 
                    label="*Confirm Password"
                    id="outlined-basic 5"
                    size="small"
                    variant="outlined"
                    name="confirmPassword"
                    type="password"
                />
                {emailError && <p className = "error-message">{emailError}</p>}
                <div className="divBtn">
                    <Button disabled={loading} type= "submit" variant= "contained" color= "secondary" className= "register-button">Register</Button>
                </div>
            </div>
        </Form>
        )}
        </Formik> :
        <SuccesRegister setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
        }
        </>
    )
}

export default Register
