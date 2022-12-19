import React from 'react';
import FormProduct from '../../forms/cruds/products.crud';
import Actions from '../../elements/forms/actions';
import DeleteForm from '../../elements/crud/delete';
import * as serviceProduct from '../../../services/products';
import * as Sets from '../Buttonset';
import { actions } from '../../../constants/config';

// los titulos de las columnos de la tabla
const headers = ['Nombre', 'Finca', 'Categoría', 'Acciones'];
// las keys del json de la consulta a base de datos false cuando es una action
const accessor = ['name', 'farm_name', 'category_name', false];
// los tamaños en acho de las tablas
const size = ['25', '25', '25', '25'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormProduct
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormProduct
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
        title="Product"
        cell={cell}
        service={serviceProduct.deleteProduct}
      />
    );
  },
]; // conjunto de arrow funciones que llaman a formularios

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} forms={forms} cell={cell} />;
};

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormProduct
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear producto';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  setCreate,
  formCreate,
  name: 'Products',
};

export default configure;
