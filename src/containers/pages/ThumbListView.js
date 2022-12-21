/* eslint-disable */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap';
import { ContextMenuTrigger } from 'react-contextmenu';

const ThumbListView = ({
  data,
  accessor,
  size,
  collect,
  component,
  headers,
}) => {
  return (
    <Col xs="12" key={data.id} className="mb-3">
      <ContextMenuTrigger id="menu_id" data={data.id} collect={collect}>
        <Card>
          <CardBody>
            <Row className="justify-content-between">
              {accessor?.map((v, i) => {
                if (accessor[i] === false) {
                  if (headers[i]) {
                    return (
                      <Col xs={size[i]} key={i} className="align-self-center">
                        <p className="list-item-heading">{headers[i]}</p>
                        {component(data, i)}
                      </Col>
                    );
                  }
                  return component(data, i);
                }
                return (
                  <Col xs={size[i]} key={i} className="align-self-center">
                    <p className="list-item-heading">{headers[i]}</p>
                    <p>{data[accessor[i]]}</p>
                  </Col>
                );
              })}
            </Row>
          </CardBody>
        </Card>
      </ContextMenuTrigger>
    </Col>
  );
};

export default React.memo(ThumbListView);
