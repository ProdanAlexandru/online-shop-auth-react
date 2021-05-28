import React, {useState} from 'react'
import {Button, Typography} from '@material-ui/core'
import InputField from '../../UI Components/InputField'
import './ForgotPassword.css'
import {useAuth} from '../../../contexts/AuthContext' 
import { Link } from 'react-router-dom'
import {Formik, Form} from 'formik'
import {forgotPasswordSchema} from './forgotpasswordvalidation'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Login = () => {

    const { handleResetPassword } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <>
         <div className="forgotpassword-container">
         <div className="forgotpassword-div">
            <Typography className="forgotpasswordTitle">Reset Password</Typography>
         </div>
            <Formik
                initialValues ={{
                    email: ""
                }}
                validationSchema = {forgotPasswordSchema}
                onSubmit = { async (values) => {
                    try {
                        setError("");
                        setLoading(true);
                        await handleResetPassword(values.email);
                        setMessage("Password reset succeeded, check your email!")
                    } catch(error) {
                        setMessage("");
                        setError(error.message);
                    }
                    setLoading(false);
            }}
            >
            {formik => (
                <Form className="forgotpassword-form" > 
                    <div className="forgotpasswordDetails">
                        <InputField  
                            htmlFor="email" 
                            label="Email Address"
                            id="outlined-basic 8"
                            size="small"
                            variant="outlined"
                            name="email"
                            type="text"
                        />
                        {error && <p className="error-message-onsubmit">{error}</p>}
                        {message && <p className="passwordReset-message">{message}</p>}
                        <div className="divBtn">
                            <Button disabled={loading} type="submit" variant="contained" className="login-button" color="secondary">Reset Password</Button>
                        </div> 
                        <div className="forgotpassword-div">
                            <Link className="forgotpasswordtext" to ="/login"><p>Go to LOGIN</p></Link>
                        </div>
                    </div>
                </Form>
            )}
            </Formik>
            </div>
            <div className="gohomebtn-div">
                <Button variant="outlined" className="gohomeButton" component = {Link} to ="/"><ArrowBackIcon className="arrowIcon"/>back to shopping</Button>
            </div>
            </>
    )
}

export default Login