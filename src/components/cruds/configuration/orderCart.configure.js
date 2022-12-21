import React from 'react';
import Actions from 'components/elements/forms/components';
import * as Sets from 'components/cruds/Buttonset';
import ImageCard from 'components/customs/image';
import { apiUrl } from 'constants/config';
import { Button, Col, Row } from 'reactstrap';

const headers = [
  false,
  'Producto',
  'Finca',
  'Cantidad',
  'Total',
  'Unidad',
  false,
];

const accessor = [
  false,
  'product_name',
  'farm_name',
  'amount',
  'total',
  'unit_value',
  false,
];

const size = ['2', '2', '2', '2', '1', '2'];

const components = [
  (cell) => {
    return <ImageCard path={`${apiUrl}/public/products`} cell={cell} />;
  },
  () => <></>,
  () => <></>,
  () => <></>,
  () => <></>,
  () => <></>,
  (cell) => (
    <>
      <Row>
        <Col>
          <Button
            color="danger"
            size="sm"
            className="glyph-icon simple-icon-trash m-1"
            onClick={() => {
              console.log(cell);
            }}
          />
        </Col>
      </Row>
    </>
  ),
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
  name: 'Mi canasta',
};

export default configure;
