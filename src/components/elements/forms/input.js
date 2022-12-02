/* eslint-disable */
import React from 'react';
import { Colxx } from '../../../components/common/CustomBootstrap';
import { FormGroup, Label } from 'reactstrap';

import ValidationError from '../../../components/elements/forms/validationError'

/**
 * 
 * @param {*} name es nombre que va ha tener dentro de data del formulario
 * @param {*} register componente que permite guardar los datos en el formulario
 * @param {*} validation validaciones que va tener los diferentes espacios del formulario
 * @param {*}  errors componente que muestra los errores
 * @param {*} title titulo que se mostrara en el formulario
 * @param {*} mssg mensaje que se muestra cuando se encuentra en estado de mostrar
 * @param {*} disabled condicion para que se no se pueda modificar el campo
 * @param {*} show condicion para habilitar el formulario solo en lectura o en edicion
 * @returns 
 */
const Input = (props) => { 

    const normalForm = (Props) => {
        const {name,register,validation={}, errors,title,size,disabled=false, mssg="", type="text"} = Props
        const attrInput = {
            id: name,
            disabled: disabled 
        }
        const attrForm = {} 
        const attrLabel = {}      
        const labelText = title === undefined? name.charAt(0).toUpperCase() + name.slice(1) : title.charAt(0).toUpperCase() + title.slice(1)
        switch (type) {
            case 'checkbox':
                attrForm['className'] = 'form-check'
                attrLabel['className'] = 'form-check-label'
                attrInput['type'] = 'checkbox'
                attrInput['className'] = 'form-check-input'
                if(mssg===true){
                    attrInput['checked'] = 'checked'                 
                }                            
                break;
            default:                          
                attrInput['defaultValue'] = mssg
                attrInput['className'] = 'form-control'                               
                break;
        }       

        return <Colxx xxs={size}>            
            <FormGroup {...attrForm}>
                {type==='checkbox'? <input {...attrInput}  {...register(name)}/> : null}
                <Label {...attrLabel}>
                    {labelText}           
                </Label>
                {type === 'text' ? <input {...attrInput}  {...register(name, validation[name])}/> : null}
                {
                    type === 'number'? 
                        <input 
                            type="number"
                            {...attrInput}  
                            {...register(name, validation[name])}
                        /> : null
                }
                {
                    type === 'time'? 
                        <input 
                            type="time"
                            {...attrInput}  
                            {...register(name, validation[name])}
                        /> : null
                }
                <ValidationError validation={validation} field={name} errors={errors}/>
            </FormGroup>                         
        </Colxx>
    }

    const showForm = (Props) => {
        const {name,title,size,disabled=false, mssg="", type} = Props
        const attrInput = {
            id: name,
            disabled: disabled 
        }
        const attrForm = {} 
        const attrLabel = {}      
        const labelText = title === undefined? name.charAt(0).toUpperCase() + name.slice(1) : title.charAt(0).toUpperCase() + title.slice(1)
        switch (type) {
            case 'checkbox':
                attrForm['className'] = 'form-check'
                attrLabel['className'] = 'form-check-label'
                attrInput['type'] = 'checkbox'
                attrInput['className'] = 'form-check-input'
                if(mssg===true){
                    attrInput['defaultChecked'] = true                
                }                         
                break;
            default:                          
                attrInput['defaultValue'] = mssg
                attrInput['className'] = 'form-control'                               
                break;
        }

        return <Colxx xxs={size}>            
            <FormGroup {...attrForm}>
                {type==='checkbox'? <input {...attrInput}/> : null}
                <Label {...attrLabel}>
                    {labelText}           
                </Label>
                {type!=='checkbox'? <input {...attrInput}/> : null}
                
            </FormGroup>                         
    </Colxx>
    }

    const {show="false"} = props

    return <>
    {show === "false" && normalForm(props) || showForm(props)}
    </>
}
export default Input
