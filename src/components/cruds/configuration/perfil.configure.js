import React from 'react';

import DeleteForm from '../../formulariosElementos/delete';
import { setCreate, setsAsignar } from '../Buttonset';
import Assign from '../../formulariosElementos/assign';
import Create from '../../formulariosElementos/perfil/create';
import Read from '../../formulariosElementos/perfil/read';
import Update from '../../formulariosElementos/perfil/update';
import * as servicePerfil from '../../../services/perfil';

// los titulos de las columnos de la tabla
const headers = ['Nombre', 'Descripción', 'Fecha de creación', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['nombre', 'descripcion', 'fechaCreacion', false];
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
        service={servicePerfil.eliminarPerfil}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={servicePerfil.modulosPerfil}
        AssignService={servicePerfil.agregarModuloPerfil}
        unAssignService={servicePerfil.eliminarModuloPerfil}
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar modulo al perfil"
      />
    );
  },
];

/** Formulario para el boton crear  */
const formCreate = (listFunction, closeFunction) => {
  return <Create listFunction={listFunction} closeFunction={closeFunction} />;
};

/** Titulo para el boton crear */
setCreate.title = 'Crear perfil';
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
  name: 'Perfiles',
};

export default configure;
