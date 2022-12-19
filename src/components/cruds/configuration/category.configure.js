import React from 'react';
import FormCategory from '../../forms/cruds/categories.crud';
import Actions from '../../elements/forms/actions';
import DeleteForm from '../../elements/crud/delete';
import * as serviceCategory from '../../../services/categories';
import * as Sets from '../Buttonset';
import { actions } from '../../../constants/config';

const headers = ['Nombre', 'Acciones'];

const accessor = ['name', false];

const size = ['70', '30'];

const forms = [
  (listFunction, closeFunction, cell) => {
    return (
      <FormCategory
        cell={cell}
        action={actions.READ}
        closeFunction={closeFunction}
        listFunction={listFunction}
      />
    );
  },
  (listFunction, closeFunction, cell) => {
    return (
      <FormCategory
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
        title="Categoría"
        cell={cell}
        service={serviceCategory.deleteCategory}
      />
    );
  },
];

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} forms={forms} cell={cell} />;
};

const formCreate = (listFunction, closeFunction) => {
  return (
    <FormCategory
      action={actions.CREATE}
      closeFunction={closeFunction}
      listFunction={listFunction}
    />
  );
};

const { setCreate, sets } = Sets;
setCreate.title = 'Crear categoría';

const configure = {
  headers,
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  setCreate,
  formCreate,
  name: 'Categorías',
};

export default configure;
