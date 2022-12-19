/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col } from 'reactstrap';
import Input from '../../elements/forms/input';
import IntlMessages from '../../../helpers/IntlMessages';
import { actions } from '../../../constants/config';
import { products as validation } from '../valiadations';
import {
  createProduct,
  getProduct,
  updateProduct,
} from '../../../services/products';
import { getCategories } from '../../../services/categories';
import {
  handlerCUD,
  handlerGetData,
  handlerGetSingleData,
} from '../../elements/crud/handlerServices';
import Select from '../../elements/forms/select';
import { getFarmsFarmer } from '../../../services/farms';
import { getCurrentUser } from '../../../helpers/Utils';

const idCurrentUser = getCurrentUser().id;

const FormProduct = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [farms, setFarms] = useState([]);

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(getProduct, cell.id, 'Carga');
      reset(data);
    }
    const categoriesData = await handlerGetData(
      getCategories,
      'Opciones',
      false
    );
    setCategories(categoriesData);

    const farmsData = await handlerGetData(getFarmsFarmer, 'Opciones', false, {
      id: idCurrentUser,
    });
    setFarms(farmsData);
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      handlerCUD(
        createProduct,
        data,
        'Creación',
        listFunction,
        closeFunction,
        reset
      );
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateProduct,
        { id: cell.id, body: data },
        'Actualización',
        listFunction,
        closeFunction,
        reset
      );
      reset();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <FormGroup>
              <Input
                title="Nombre"
                name="name"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Select
                title="Categoría"
                name="id_category"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                options={categories}
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Select
                title="Finca"
                name="id_farm"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                options={farms}
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

export default FormProduct;
