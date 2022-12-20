/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Card, Col, Input, Row } from 'reactstrap';
import { ContextMenuTrigger } from 'react-contextmenu';
import { apiUrl } from 'constants/config';
import Rating from 'components/common/Rating';

const ThumbListView = ({ data, accessor, size, collect, actions, headers }) => {
  return (
    <Col xs="12" key={data.id} className="mb-3">
      <ContextMenuTrigger id="menu_id" data={data.id} collect={collect}>
        <Card>
          <Row className="justify-content-between">
            {accessor?.map((v, i) => {
              if (accessor[i] === false) {
                return actions(data);
              }
              if (accessor[i] === 'rating') {
                return (
                  <Col xs={size[i]} key={i} className="align-self-center">
                    <Rating
                      total={5}
                      rating={data[accessor[i]]}
                      interactive={false}
                    />
                  </Col>
                );
              }
              if (accessor[i] === 'buy') {
                return (
                  <Col xs={size[i]} key={i} className="align-self-center">
                    <p className="list-item-heading">{headers[i]}</p>
                    <Row>
                      <Col xs={8}>
                        <Input type="number" name="quantity" id="quantity" />
                      </Col>
                      <Col xs={4}>
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="sm"
                        >
                          <i className="simple-icon-basket" />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                );
              }
              if (accessor[i] === 'image') {
                return (
                  <Col xs={size[i]} key={i} className="align-self-center">
                    <img
                      alt={data.name}
                      src={
                        data[accessor[i]]
                          ? `${apiUrl}/public/farms/${data[accessor[i]]}`
                          : `${apiUrl}/public/products/product.jpg`
                      }
                      className="list-thumbnail responsive border-0 card-img-left"
                    />
                  </Col>
                );
              }
              return (
                <Col xs={size[i]} key={i} className="align-self-center">
                  <p className="list-item-heading">{headers[i]}</p>
                  <p>{data[accessor[i]]}</p>
                </Col>
              );
            })}
          </Row>
        </Card>
      </ContextMenuTrigger>
    </Col>
  );
};

export default React.memo(ThumbListView);
