/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { actions } from 'constants/config';
import { createFarm, getFarm, updateFarm } from 'services/farms';
import {
  handlerCUD,
  handlerGetSingleData,
} from 'components/elements/crud/handlerServices';
import Input from 'components/elements/forms/input';
import FileComplete from 'components/elements/forms/fileComplete';
import { getCurrentUser } from 'helpers/Utils';
import { farms as validation } from '../valiadations';

const user = getCurrentUser();

const FormFarm = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(
        getFarm,
        cell.id,
        'Buscando categoria'
      );
      reset(data);
    }
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        console.log(key, data[key]);
        formData.append(key, data[key]);
      });
      formData.append('id_user', user.id);
      handlerCUD(
        createFarm,
        formData,
        'Creación',
        listFunction,
        closeFunction,
        reset
      );
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateFarm,
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
          <Col xs="7">
            <FormGroup>
              <Input
                title="Dirección"
                name="address"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
          <Col xs="5">
            <FormGroup>
              <Input
                title="Matrícula inmobiliaria"
                name="number_license"
                register={register}
                validation={validation}
                errors={errors}
                size="12"
                disabled={action === actions.READ}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="6">
            <FormGroup>
              <FileComplete
                title="imagen"
                name="image"
                register={register}
                setValue={setValue}
                size="12"
                extensions="image/png, image/jpeg, image/jpg"
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

export default FormFarm;
