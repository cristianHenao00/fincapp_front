import React from 'react';
import Actions from 'components/elements/forms/components';
import * as Sets from 'components/cruds/Buttonset';
import BuyProduct from 'components/customs/buy';
import ImageCard from 'components/customs/image';
import { apiUrl } from 'constants/config';

const headers = [false, 'Nombre', 'Categoria', 'Valor', 'Cantidad', 'Comprar'];

const accessor = [false, 'name', 'category_name', 'value', 'amount', false];

const size = ['3', '1', '2', '1', '1', '4'];

const components = [
  (cell) => {
    return <ImageCard path={`${apiUrl}/public/products`} cell={cell} />;
  },
  () => <></>,
  () => <></>,
  () => <></>,
  () => <></>,
  (cell) => {
    return <BuyProduct cell={cell} />;
  },
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
  name: 'Finca',
};

export default configure;
