import React from 'react';
import FormMenu from '../../forms/cruds/menus.crud';
import Actions from '../../elements/forms/actions';
import DeleteForm from '../../elements/crud/delete';
import * as serviceMenu from '../../../services/menu';
import * as Sets from '../Buttonset';
import { actions } from '../../../constants/config';

// los titulos de las columnos de la tabla
const headers = ['id', 'Nombre', 'Descripción', 'Icono', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['id', 'nombre', 'descripcion', 'icono', false];
// los tamaños en acho de las tablas
const size = ['5', '20', '15', '20', '30'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormMenu
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormMenu
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
        title="Menu"
        cell={cell}
        service={serviceMenu.eliminarMenu}
      />
    );
  },
]; // conjunto de arrow funciones que llaman a formularios

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} forms={forms} cell={cell} />;
};

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormMenu
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear menu';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  setCreate,
  formCreate,
  name: 'Menus',
};

export default configure;
