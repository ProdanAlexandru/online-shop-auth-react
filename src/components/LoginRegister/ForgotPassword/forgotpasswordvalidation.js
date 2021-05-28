import * as yup from 'yup'

const emptyFieldMessage = "Field cannot be empty.";

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required(emptyFieldMessage)
})