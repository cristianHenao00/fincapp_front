/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { Colxx } from 'components/common/CustomBootstrap';
import { FormGroup, Label } from 'reactstrap';
import {listarMunicipios} from 'services/ubicacion';

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
const CiudadesInput = (Props) => {        

    const {name,register,validation, errors,title,size,disabled=false, mssg="", type, idDepartamento} = Props 
    const [ciudades, setCiudades] = useState([]) 
    
    const attrInput = {
        id: name,
        disabled: disabled 
    }
    const attrForm = {} 
    const attrLabel = {}      
    const labelText = title === undefined? name.charAt(0).toUpperCase() + name.slice(1) : title.charAt(0).toUpperCase() + title.slice(1)         
                                   
    attrInput['defaultValue'] = mssg
    attrInput['className'] = 'form-control'
    
    useEffect(() => {
        listarMunicipios(idDepartamento).then((response) =>  setCiudades(response.data))           
    }, [idDepartamento])
   

    return <Colxx xxs={size}>            
        <FormGroup {...attrForm}>               
            <Label {...attrLabel}>
                {labelText}           
            </Label>
            <select
                type="text"
                className="form-control"                           
                id="idCiudad"              
                {...register('idCiudad')}
            >
                <option value="">Seleccione uno</option>
                    {ciudades.map((d) => <option key={d.id} value={d.id}>
                            {d.nombre}
                      </option>)}
            </select>   
              
        </FormGroup>                         
    </Colxx>
    
    
}
export default CiudadesInput