/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col } from 'reactstrap';
import Input from 'components/elements/forms/input';
import IntlMessages from 'helpers/IntlMessages';
import { actions } from 'constants/config';
import { getModule, createModule, updateModule } from 'services/modules';
import {
  handlerCUD,
  handlerGetSingleData,
} from 'components/elements/crud/handlerServices';
import { modules as validation } from '../valiadations';

const FormModulo = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(getModule, cell.id, 'Carga');
      reset(data);
    }
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      handlerCUD(
        createModule,
        data,
        'Creación',
        listFunction,
        closeFunction,
        reset
      );
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateModule,
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

        <Row>
          <Col>
            <FormGroup>
              <Input
                title="Descripción"
                name="description"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Input
                title="Ruta"
                name="path"
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
              <Input
                title="Ícono"
                name="icon"
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

export default FormModulo;
