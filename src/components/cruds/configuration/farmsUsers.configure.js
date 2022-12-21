import React from 'react';
import Actions from 'components/elements/forms/components';
import * as Sets from 'components/cruds/Buttonset';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import ImageCard from 'components/customs/image';
import { apiUrl } from 'constants/config';
import Rating from 'components/common/Rating';

const headers = [false, 'Finca', 'Dirección', 'Calificación', false];

const accessor = [false, 'name', 'address', false, false];

const size = ['3', '2', '2', '2', '3'];

const components = [
  (cell) => {
    return <ImageCard path={`${apiUrl}/public/farms`} cell={cell} />;
  },
  () => <></>,
  () => <></>,
  (cell) => <Rating total={5} rating={cell.rating} interactive={false} />,
  (cell) => {
    return (
      <NavLink to={`/app/public/farm_user/${cell.id}`}>
        <Button
          color="primary"
          className="btn-shadow"
          size="sm"
          style={{ marginRight: '5px' }}
        >
          <i className="iconsminds-right-1" />
        </Button>
      </NavLink>
    );
  },
];

const actionsForm = (cell) => {
  return <Actions sets={Sets.sets} actions={components} cell={cell} />;
};

const configure = {
  accessor,
  size,
  headers,
  components,
  actionsForm,
  name: 'Inicio',
};

export default configure;
