import React from 'react';

import DeleteForm from '../../elements/crud/delete';
import { setCreate, setsAsignar } from '../Buttonset';
import Assign from '../../elements/crud/assign';
import FormularioModulo from '../../forms/cruds/modulos.crud';
import * as serviceModulo from '../../../services/modules';
import { actions } from '../../../constants/config';

// los titulos de las columnos de la tabla
const headers = ['Nombre', 'Descripción', 'Ruta', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['name', 'description', 'path', false];
// los tamaños en acho de las tablas
const size = ['10', '20', '30', '15', '25'];

/** Listado de funciones con sus formularios */
const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormularioModulo
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormularioModulo
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
        title={`el módulo ${cell.name}`}
        cell={cell}
        service={serviceModulo.deleteModule}
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
  return (
    <FormularioModulo
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
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
