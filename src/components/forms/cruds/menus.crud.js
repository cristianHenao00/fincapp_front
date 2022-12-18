/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Button, Form, Row, Col, CustomInput } from 'reactstrap';
import Input from '../../elements/forms/input';
import IntlMessages from '../../../helpers/IntlMessages';
import { actions } from '../../../constants/config';
import { modules as validation } from '../valiadations';
import { createMenu, getMenu, updateMenu } from '../../../services/menu';
import {
  handlerCUD,
  handlerGetSingleData,
} from '../../elements/crud/handlerServices';

const FormMenu = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    if (action === actions.UPDATE || action === actions.READ) {
      const data = await handlerGetSingleData(getMenu, cell.id, 'Carga');
      reset(data);
    }
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      console.log(data);
      handlerCUD(
        createMenu,
        data,
        'Creación',
        listFunction,
        closeFunction,
        reset
      );
    } else if (action === actions.UPDATE) {
      handlerCUD(
        updateMenu,
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
        <Row className="justify-content-center">
          <Col xs="2">
            <FormGroup>
              <CustomInput
                type="checkbox"
                label="Leer"
                defaultChecked={getValues('read_action')}
                onChangeCapture={(e) => {
                  setValue('read_action', e.target.checked);
                }}
              />
            </FormGroup>
          </Col>

          <Col xs="2">
            <FormGroup>
              <CustomInput
                type="checkbox"
                label="Crear"
                defaultChecked={getValues('create_action')}
                onChangeCapture={(e) => {
                  setValue('create_action', e.target.checked);
                }}
              />
            </FormGroup>
          </Col>
          <Col xs="2">
            <FormGroup>
              <CustomInput
                type="checkbox"
                label="Actualizar"
                defaultChecked={getValues('update_action')}
                onChangeCapture={(e) => {
                  setValue('update_action', e.target.checked);
                }}
              />
            </FormGroup>
          </Col>
          <Col xs="2">
            <FormGroup>
              <CustomInput
                type="checkbox"
                label="Eliminar"
                defaultChecked={getValues('delete_action')}
                onChangeCapture={(e) => {
                  setValue('delete_action', e.target.checked);
                }}
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

export default FormMenu;
