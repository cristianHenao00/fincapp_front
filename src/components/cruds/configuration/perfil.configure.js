import React from 'react';

import DeleteForm from 'components/elements/crud/delete';
import { setCreate, setsAsignar } from 'components/cruds/Buttonset';
import Assign from 'components/elements/crud/assign';
import FormPerfiles from 'components/forms/cruds/perfiles.cruds';
import * as servicePerfil from 'services/perfil';
import { actions } from 'constants/config';

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
      <FormPerfiles
        action={actions.READ}
        cell={cell}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormPerfiles
        action={actions.UPDATE}
        cell={cell}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <DeleteForm
        listFunction={listFunction}
        closeFunction={closeFunction}
        title="Perfil"
        cell={cell}
        service={servicePerfil.eliminarPerfil}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={servicePerfil.modulosPerfil}
        assignService={servicePerfil.agregarModuloPerfil}
        unassignService={servicePerfil.deleteModulePerfil}
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar modulo al perfil"
      />
    );
  },
];

/** Form para el boton crear  */
const formCreate = (listFunction, closeFunction) => {
  return (
    <FormPerfiles
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
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
