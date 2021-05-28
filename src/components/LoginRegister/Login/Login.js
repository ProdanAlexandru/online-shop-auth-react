import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import InputField from '../../UI Components/InputField'
import '../../LoginRegister/LoginRegister.css'
import {useAuth} from '../../../contexts/AuthContext' 
import { Link } from 'react-router-dom'
import {Formik, Form} from 'formik'
import {loginSchema} from './loginvalidation'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { handleSignin } = useAuth();

    return (
            <Formik
                initialValues ={{
                    email: "",
                    password: ""
                }}
                validationSchema = {loginSchema}
                onSubmit = { async (values) => {
                    try {
                        setError("");
                        setLoading(true);
                        await handleSignin(values.email, values.password);
                        console.log("logged in")
                        history.goBack();
                    } catch(error) {
                        setError(error.message);
                    }
                    setLoading(false);
            }}
            >
            {formik => (
                <Form className="login-form" > 
                <div className="loginDetails">
                        <InputField  
                            htmlFor="email" 
                            label="Email Address"
                            id="outlined-basic 3"
                            size="small"
                            variant="outlined"
                            name="email"
                            type="text"
                        />
                        <InputField 
                            htmlFor="password" 
                            label="Password"
                            id="outlined-basic 4"
                            size="small"
                            variant="outlined"
                            name="password"
                            type="password"
                        />
                        {error && <p className="error-message-onsubmit">{error}</p>}
                        <div className="divBtn">
                            <Button disabled={loading} type="submit" variant="contained" className="login-button" color="secondary">Login</Button>
                        </div> 
                        <div className="forgotpassword-div">
                            <Link className="forgotpasswordtext" to ="/forgot-password"><p>Forgot your password?</p></Link>
                        </div>
                </div>
            </Form>
            )}
            </Formik>
    )
}

export default Login