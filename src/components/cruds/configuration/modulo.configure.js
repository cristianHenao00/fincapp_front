import React from 'react';

import DeleteForm from '../../formulariosElementos/delete';
import { setCreate, setsAsignar } from '../Buttonset';
import Assign from '../../formulariosElementos/assign';
import Create from '../../formulariosElementos/modulo/create';
import Read from '../../formulariosElementos/modulo/read';
import Update from '../../formulariosElementos/modulo/update';
import * as serviceModulo from '../../../services/modulos';

// los titulos de las columnos de la tabla
const headers = ['id', 'Nombre', 'Descripción', 'Icono', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['id', 'nombre', 'descripcion', 'icono', false];
// los tamaños en acho de las tablas
const size = ['5', '20', '15', '20', '30'];

/** Listado de funciones con sus formularios */
const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <Read
        listFunction={listFunction}
        closeFunction={closeFunction}
        cell={cell}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Update
        listFunction={listFunction}
        closeFunction={closeFunction}
        cell={cell}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <DeleteForm
        listFunction={listFunction}
        closeFunction={closeFunction}
        title="Menu"
        cell={cell}
        service={serviceModulo.eliminarModulo}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={serviceModulo.listarMenusModulo}
        AssignService={serviceModulo.asignarMenuModulo}
        unAssignService={serviceModulo.eliminarMenuModulo}
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar menu al modulo"
      />
    );
  },
];

/** Formulario para el boton crear  */
const formCreate = (listFunction, closeFunction) => {
  return <Create listFunction={listFunction} closeFunction={closeFunction} />;
};

/** Titulo para el boton crear */
setCreate.title = 'Crear modulo';
const sets = setsAsignar;
/** archivo de configuracion para la tabla(CRUD) */
const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  setCreate,
  formCreate,
  name: 'Módulos',
};

export default configure;
