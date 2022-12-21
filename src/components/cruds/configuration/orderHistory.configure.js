import React from 'react';
import Actions from 'components/elements/forms/components';
import * as Sets from 'components/cruds/Buttonset';
import Rating from 'components/common/Rating';

const headers = ['Finca', 'Total', 'Estado', 'Fecha', 'Calificar'];

const accessor = ['farm_name', 'total', 'state', 'date', false];

const size = ['2', '1', '2', '2', '3'];

const components = [
  () => <></>,
  () => <></>,
  () => <></>,
  () => <></>,
  (cell) => <Rating total={5} rating={cell.rating} interactive />,
];

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} forms={components} cell={cell} />;
};

const { setSingleComponent } = Sets;

const configure = {
  accessor,
  size,
  headers,
  sets: setSingleComponent,
  components,
  actionsForm,
  name: 'Historial de pedidos',
};

export default configure;
