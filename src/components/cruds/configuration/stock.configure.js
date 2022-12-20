import React from 'react';
import FormStock from 'components/forms/cruds/stock.crud';
import Actions from 'components/elements/forms/actions';
import DeleteForm from 'components/elements/crud/delete';
import * as serviceFarm from 'services/farms';
import * as Sets from 'components/cruds/Buttonset';
import { actions } from 'constants/config';

const headers = [
  'Producto',
  'Valor',
  'Cantidad',
  'Finca',
  'Visibilidad',
  'Acciones',
];

const accessor = [
  'product_name',
  'value',
  'amount',
  'farm_name',
  'visibility',
  false,
];

const size = ['15', '15', '15', '20', '10', '25'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormStock
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormStock
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
        title="Fincas"
        cell={cell}
        service={serviceFarm.deleteFarm}
      />
    );
  },
];

const actionsForm = (cell, listFunction) => {
  return (
    <Actions
      sets={Sets.sets}
      forms={forms}
      cell={cell}
      listFunction={listFunction}
    />
  );
};

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormStock
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear producción';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  setCreate,
  formCreate,
  name: 'Producción',
};

export default configure;
