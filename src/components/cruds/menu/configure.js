/* eslint-disable */
import React from 'react'
import Create from '../../../components/formulariosElementos/menu/create'
import Read from '../../../components/formulariosElementos/menu/read'
import Update from '../../../components/formulariosElementos/menu/update'
import Actions from '../../../components/elementos/forms/actions'
import DeleteForm from '../../../components/formulariosElementos/delete'
import * as serviceMenu from '../../../services/menu'
import * as Sets from '../../../components/cruds/Buttonset'

// los titulos de las columnos de la tabla
const headers  =  ["id",'Nombre','Descripción','Icono','Acciones']
// las keys del json de la consulta a base de datos false cuando es una action
const accessor =  ["id",'nombre','descripcion',"icono",false]
// los tamaños en acho de las tablas
const size     =  ["5","20","15","20","30"]

const forms = [
    (listFunction,closeFunction,cell) => {return <Read 
                                                        listFunction = {listFunction} 
                                                        closeFunction = {closeFunction} 
                                                        cell = {cell}/>},
    (listFunction,closeFunction,cell) => {return <Update 
                                                        listFunction = {listFunction} 
                                                        closeFunction = {closeFunction} 
                                                        cell = {cell}/>},
    (listFunction,closeFunction,cell) => {return <DeleteForm 
                                                        listFunction = {listFunction} 
                                                        closeFunction = {closeFunction} 
                                                        title = "Menu" 
                                                        cell = {cell} 
                                                        service = {serviceMenu.eliminarMenu}/>},
] // conjunto de arrow funciones que llaman a formularios

const actions = (cell) => { return <Actions 
                                        sets={Sets.sets} 
                                        forms={forms} 
                                        cell = {cell}/>}

const formCreate = (listFunction,closeFunction) => {return <Create 
                                                                listFunction = {listFunction} 
                                                                closeFunction = {closeFunction}/>}

const {setCreate,sets} = Sets
setCreate.title = "Crear menu"

const configure = {
    headers,
    accessor,
    size,
    sets,
    forms,
    actions,
    setCreate,
    formCreate,
}

export default configure
