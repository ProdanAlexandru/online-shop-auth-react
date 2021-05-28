import React from 'react'
import {InputLabel, TextField} from '@material-ui/core'
import { useField, ErrorMessage } from 'formik' 

const InputField = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className= "classBox">
            <InputLabel 
                className= "inputDetail" 
                htmlFor= { field.htmlFor }>
                { props.label } 
                <ErrorMessage 
                    component="p"
                    className= "error-message" 
                    name= {field.name} 
                />
            </InputLabel>
            <TextField 
                className= "textInput"
                { ...field } 
                { ...props }
                label= ""
                autoComplete= "off"
                placeholder= ""
            /> 
        </div>
        
    )
}

export default InputField
