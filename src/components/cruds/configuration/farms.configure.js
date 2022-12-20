import React from 'react';
import FormFarm from 'components/forms/cruds/farms.crud';
import Actions from 'components/elements/forms/actions';
import DeleteForm from 'components/elements/crud/delete';
import * as serviceFarm from 'services/farms';
import * as Sets from 'components/cruds/Buttonset';
import { actions } from 'constants/config';

const headers = ['Nombre', 'Dirección', 'Matrícula inmobiliaria', 'Acciones'];

const accessor = ['name', 'address', 'number_license', false];

const size = ['20', '30', '25', '25'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormFarm
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormFarm
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
    <FormFarm
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear finca';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  setCreate,
  formCreate,
  name: 'Fincas',
};

export default configure;
