import React from 'react';
import FormUsers from 'components/forms/cruds/users.crud';
import Assign from 'components/elements/crud/assign';
import DeleteForm from 'components/elements/crud/delete';
import { setCreate, setsAsignar } from 'components/cruds/Buttonset';
import * as serviceUsers from 'services/users';
import { actions } from 'constants/config';
import { getRoles } from 'services/roles';

// los titulos de las columnos de la tabla
const headers = ['Nombre completo', 'Correo electrónico', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['name', 'email', false];
// los tamaños en acho de las tablas
const size = ['35', '35', '30'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormUsers
        action={actions.READ}
        cell={cell}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormUsers
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
        title="Usuario"
        cell={cell}
        service={serviceUsers.eliminarUsuario}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <Assign
        listFunction={getRoles}
        assignService={serviceUsers.getUsers}
        unassignService={serviceUsers.getUsers}
        closeFunction={closeFunction}
        cell={cell}
        msgs="agregar menu al modulo"
      />
    );
  },
];

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormUsers
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

setCreate.title = 'Crear usuario';
const sets = setsAsignar;

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  setCreate,
  formCreate,
  name: 'Users',
};

export default configure;
