/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { actions } from '../../../constants/config';
import {
  createCategory,
  getCategory,
  updateCategory,
} from '../../../services/categories';
import { categories as validation } from '../valiadations';
import {
  handlerCUD,
  handlerGetSingleData,
} from '../../elements/crud/handlerServices';
import Input from '../../elements/forms/input';

const FormCategory = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(
        getCategory,
        cell.id,
        'Buscando categoria'
      );
      reset(data);
    }
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      handlerCUD(
        createCategory,
        data,
        'Creación',
        listFunction,
        closeFunction,
        reset
      );
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateCategory,
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

export default FormCategory;
