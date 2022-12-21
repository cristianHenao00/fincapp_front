/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/orderCart.configure';
import { handlerGetData } from 'components/elements/crud/handlerServices';
import { getOrdersCartUser } from 'services/orders';
import ListView from 'components/elements/crud/listView';
import ConfigureComponents from 'components/cruds/configureComponents';
import { getCurrentUser } from 'helpers/Utils';
import { Card, CardBody, Col, Row } from 'reactstrap';
import ConsolidateOrder from 'components/customs/consolidateOrder';

const idCurrentUser = getCurrentUser().id;
const myorders = [
  {
    image: null,
    product_name: 'Producto 1',
    amount: 1,
    total: 1000,
    unit_value: 1000,
  },
  {
    image: null,
    product_name: 'Producto 2',
    amount: 1,
    total: 1000,
    unit_value: 1000,
  },
  {
    image: null,
    product_name: 'Producto 3',
    amount: 1,
    total: 1000,
    unit_value: 1000,
  },
];
const Cart = ({ match }) => {
  const [data, setData] = useState(myorders);

  const component = ConfigureComponents(configure);

  const listFunction = async () => {
    const newData = await handlerGetData(
      getOrdersCartUser,
      'Listando productos',
      false,
      { id: idCurrentUser }
    );
    console.log(newData);
    setData(myorders);
  };

  useEffect(() => {
    listFunction();
  }, []);

  return (
    <>
      <ListView
        accessor={configure.accessor}
        size={configure.size}
        data={data}
        component={component}
        headers={configure.headers}
        name={configure.name}
        match={match}
      />
      <Card>
        <CardBody>
          <Row className="justify-content-center">
            <Col xs="8">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Costo productos</td>
                    <td>$ 0</td>
                  </tr>
                  <tr>
                    <td>Tarifa servicio</td>
                    <td>$ 0</td>
                  </tr>
                  <tr>
                    <td>Envío</td>
                    <td>$ 0</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$ 0</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <ConsolidateOrder />
          </Row>
        </CardBody>
      </Card>
    </>
  );
};
export default Cart;
