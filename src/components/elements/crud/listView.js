/* eslint-disable */
import React from 'react';
import { Separator } from 'components/common/CustomBootstrap';
import ColumnFilter from './filters';
import './styles.css';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Card, CardBody, Col, Row } from 'reactstrap';
import ThumbListView from 'containers/pages/ThumbListView';

/**
 * @param {headers} lista con la cabecera de la tabla
 * @param  {accessor} lista como se representa en BD
 * @param  {size} lista con los tamaños de cada columna
 * @param  {data} contenido a mostrar
 * @param  {modal} configuracion del
 * @returns  la tabla con filtros
 */
function ListView({
  headers,
  accessor,
  size,
  data,
  component,
  name = '',
  match = { path: '' },
}) {
  return (
    <>
      <Row>
        <Col xxs="12">
          <Breadcrumb heading={name} match={match} />
          <Separator className="mb-5" />
        </Col>
      </Row>

      {data.length !== 0 &&
        data.map((v, i) => (
          <Row>
            <ThumbListView
              key={data[i].id}
              data={data[i]}
              accessor={accessor}
              size={size}
              component={component}
              headers={headers}
            />
          </Row>
        ))}
    </>
  );
}

export default ListView;
