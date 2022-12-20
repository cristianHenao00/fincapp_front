import React from 'react';
import FormCategory from 'components/forms/cruds/categories.crud';
import Actions from 'components/elements/forms/actions';
import * as Sets from 'components/cruds/Buttonset';
import { actions } from 'constants/config';

const accessor = ['image', 'name', 'address', 'rating', false];

const size = ['25', '25', '25', '25'];

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
];

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} forms={forms} cell={cell} />;
};

const { sets } = Sets;

const configure = {
  accessor,
  size,
  sets,
  forms,
  actionsForm,
  name: 'Inicio',
};

export default configure;
