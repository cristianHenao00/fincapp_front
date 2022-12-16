import React from 'react';
import DeleteForm from '../../elements/crud/delete';
import { setCreate, setsAsignar } from '../Buttonset';
import Assign from '../../elements/crud/assign';
import FormModulo from '../../forms/cruds/modulos.crud';
import * as serviceModulo from '../../../services/modules';
import { actions } from '../../../constants/config';

const headers = ['Nombre', 'Descripción', 'Ruta', 'Acciones'];

const accessor = ['name', 'description', 'path', false];

const size = ['20', '40', '10', '30'];

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
        title={`el módulo ${cell.name}`}
        cell={cell}
        service={serviceModulo.deleteModule}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={serviceModulo.getMenus}
        assignService={serviceModulo.assignMenu}
        unassignService={serviceModulo.unassignMenu}
        closeFunction={closeFunction}
        cell={cell}
        msgs="Agregar menu al modulo"
      />
    );
  },
];

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormModulo
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

setCreate.title = 'Crear modulo';
const sets = setsAsignar;

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
