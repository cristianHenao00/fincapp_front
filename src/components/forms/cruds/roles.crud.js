/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { actions } from 'constants/config';
import { createRole, getRole, updateRole } from 'services/roles';
import {
  handlerCUD,
  handlerGetSingleData,
} from 'components/elements/crud/handlerServices';
import Input from 'components/elements/forms/input';
import { roles as validation } from '../valiadations';

const FormRol = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(getRole, cell.id, 'Buscando rol');
      reset(data);
    }
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      handlerCUD(createRole, data, 'Creación', listFunction, closeFunction);
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateRole,
        { id: cell.id, body: data },
        'Actualización',
        listFunction,
        closeFunction
      );
    }
    reset();
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

export default FormRol;
