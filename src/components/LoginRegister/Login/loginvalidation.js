import * as yup from 'yup'

const emptyFieldMessage = "Field cannot be empty.";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required(emptyFieldMessage),
    password: yup.string().min(6, "Password must be at least 6 characters").max(20).required(emptyFieldMessage),
})