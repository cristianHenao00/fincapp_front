import React from 'react';
import DeleteForm from '../../elements/crud/delete';
import { setCreate, sets } from '../Buttonset';
import FormModulo from '../../forms/cruds/modulos.crud';
import * as service from '../../../services/permissions';
import { actions } from '../../../constants/config';

// los titulos de las columnos de la tabla
const headers = ['URL', 'Método', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['url', 'method', false];
// los tamaños en acho de las tablas
const size = ['40', '20', '20'];

/** Listado de funciones con sus formularios */
const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormModulo
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormModulo
        cell={cell}
        action={actions.UPDATE}
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
        title="Módulo"
        cell={cell}
        service={service.deletePermissions}
      />
    );
  },
];

/** Form para el boton crear  */
const formCreate = (listFunction, closeFunction) => {
  return (
    <FormModulo
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

/** Titulo para el boton crear */
setCreate.title = 'Crear permiso';
/** archivo de configuracion para la tabla(CRUD) */
const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  setCreate,
  formCreate,
  name: 'Permisos',
};

export default configure;
