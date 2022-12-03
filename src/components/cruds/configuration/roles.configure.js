import React from 'react';
import FormularioRol from '../../forms/cruds/roles.crud';
import { setCreate, setsAsignar } from '../Buttonset';
import Assign from '../../elements/crud/assign';
import DeleteForm from '../../elements/crud/delete';
import * as ServiceRole from '../../../services/roles';
import { actions } from '../../../constants/config';

// los titulos de las columnos de la tabla
const headers = ['id', 'Nombre', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['id', 'name', false];
// los tamaños en acho de las tablas
const size = ['5', '20', '15', '20', '30'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormularioRol
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormularioRol
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
        service={ServiceRole.deleteRole}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={ServiceRole.getRoles}
        AssignService={ServiceRole.getRoles}
        unAssignService={ServiceRole.getRoles}
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar modulo al rol"
      />
    );
  },
];

/** Formulario para el boton crear  */
const formCreate = (listFunction, closeFunction) => {
  return (
    <FormularioRol
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

/** Titulo para el boton crear */
setCreate.title = 'Crear roles';
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
