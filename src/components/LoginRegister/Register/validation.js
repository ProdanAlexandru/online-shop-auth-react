import * as yup from 'yup'

const emptyFieldMessage = "Field cannot be empty.";

export const userSchema = yup.object().shape({
    firstname: yup.string().required(emptyFieldMessage),
    lastname: yup.string().required(emptyFieldMessage),
    email: yup.string().email("Invalid Email").required(emptyFieldMessage),
    password: yup.string().min(6, "Password must be at least 6 characters").max(20).required(emptyFieldMessage),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords do not match").required(emptyFieldMessage)
})