import React from 'react';
import Create from '../../formulariosElementos/menu/create';
import Read from '../../formulariosElementos/menu/read';
import Update from '../../formulariosElementos/menu/update';
import Actions from '../../elementos/forms/actions';
import DeleteForm from '../../formulariosElementos/delete';
import * as serviceMenu from '../../../services/menu';
import * as Sets from '../Buttonset';

// los titulos de las columnos de la tabla
const headers = ['id', 'Nombre', 'Descripción', 'Icono', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['id', 'nombre', 'descripcion', 'icono', false];
// los tamaños en acho de las tablas
const size = ['5', '20', '15', '20', '30'];

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
        service={serviceMenu.eliminarMenu}
      />
    );
  },
]; // conjunto de arrow funciones que llaman a formularios

const actions = (cell) => {
  return <Actions sets={Sets.sets} forms={forms} cell={cell} />;
};

const formCreate = (listFunction, closeFunction) => {
  return <Create listFunction={listFunction} closeFunction={closeFunction} />;
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear menu';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actions,
  setCreate,
  formCreate,
  name: 'Menus',
};

export default configure;
