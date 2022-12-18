import React from 'react';
import FormRol from '../../forms/cruds/roles.crud';
import Assign from '../../elements/crud/assign';
import DeleteForm from '../../elements/crud/delete';
import * as ServiceRole from '../../../services/roles';
import * as Sets from '../Buttonset';
import { actions } from '../../../constants/config';

const headers = ['Nombre', 'Acciones'];

const accessor = ['name', false];

const size = ['70', '30'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormRol
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormRol
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
        title="Roles"
        cell={cell}
        service={ServiceRole.deleteRole}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={ServiceRole.getRoleModules} // funcion que devuelve la lista de elementos a asociar
        assignService={ServiceRole.assignModule} // función de asociación
        unassignService={ServiceRole.unassignModule} // función de desasociación
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar modulo al rol"
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={ServiceRole.getRolePermissions} // funcion que devuelve la lista de elementos a asociar
        assignService={ServiceRole.assignPermission} // función de asociación
        unassignService={ServiceRole.unassignPermission} // función de desasociación
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar modulo al rol"
      />
    );
  },
];

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormRol
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, setsDoubleAsignar } = Sets;

setCreate.title = 'Crear rol';
const sets = setsDoubleAsignar;

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  setCreate,
  formCreate,
  name: 'Roles',
};

export default configure;
