/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { actions } from 'constants/config';
import { createStock, getStock, updateStock } from 'services/stocks';
import {
  handlerCUD,
  handlerGetData,
  handlerGetSingleData,
} from 'components/elements/crud/handlerServices';
import Input from 'components/elements/forms/input';
import { getCurrentUser } from 'helpers/Utils';
import Select from 'components/elements/forms/select';
import { getProductsFarmer } from 'services/products';
import { stock as validation } from '../valiadations';

const user = getCurrentUser();

const FormStock = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(
        getStock,
        cell.id,
        'Buscando categoria'
      );
      reset(data);
    }
    const productsData = await handlerGetData(
      getProductsFarmer,
      'Opciones',
      false,
      {
        id: user.id,
      }
    );
    setProducts(productsData);
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      const body = {
        ...data,
        published: new Date(),
        visibility: true,
      };
      console.log(body);
      handlerCUD(
        createStock,
        body,
        'Creación',
        listFunction,
        closeFunction,
        reset
      );
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateStock,
        { id: cell.id, body: data },
        'Actualización',
        listFunction,
        closeFunction
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs="6">
            <FormGroup>
              <Select
                title="Producto"
                name="id_product"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                options={products}
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <Input
                title="Valor"
                name="value"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                type="number"
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <Input
                title="Cantidad"
                name="amount"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                type="number"
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
        </Row>

        {action !== actions.READ && (
          <Button outline color="success">
            <IntlMessages id="Guardar" />
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormStock;
