import React from 'react';
import FormularioUsuarios from '../../forms/cruds/usuarios.crud';
import Actions from '../../elements/forms/actions';
import DeleteForm from '../../elements/crud/delete';
import * as serviceUsuarios from '../../../services/usuarios';
import * as Sets from '../Buttonset';
import { actions } from '../../../constants/config';

// los titulos de las columnos de la tabla
const headers = [
  'Nombre completo',
  'Dirección',
  'Correo electrónico',
  'Acciones',
];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = [
  'informacionUsuario.nombreCompleto',
  'informacionUsuario.direccion',
  'informacionUsuario.correo',
  false,
];
// los tamaños en acho de las tablas
const size = ['5', '20', '15', '20', '30'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormularioUsuarios
        action={actions.READ}
        cell={cell}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormularioUsuarios
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
        service={serviceUsuarios.eliminarUsuario}
      />
    );
  },
]; // conjunto de arrow funciones que llaman a formularios

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} forms={forms} cell={cell} />;
};

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormularioUsuarios
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear usuario';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  setCreate,
  formCreate,
  name: 'Usuarios',
};

export default configure;
