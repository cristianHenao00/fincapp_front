/* eslint-disable */
import React from 'react';

const ValidationError = (validation) => {    
    const field = validation.field
    var validationKeys = []
    if(validation?.validation[field]){        
        validationKeys = Object.keys(validation?.validation[field])
        /* console.log(validation.errors) */
    }    
    
    return <>
        {validationKeys.map(val => {
            return validation.errors[field] && <div className="invalid-feedback d-block">{validation.errors[field].message}</div>
        })}
    </>
}

export default ValidationError