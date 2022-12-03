/* eslint-disable*/
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/named */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Button, Form, Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx } from '../../common/CustomBootstrap';
import { actions } from '../../../constants/config';
import createNotification from '../../notificaciones/flotantes';

const FormularioRol = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (action === actions.UPDATE || action === actions.READ) {
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    if (action === actions.CREATE) {
    } else if (action === actions.UPDATE) {
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Colxx xxs="12" className="nombre">
            <FormGroup>
              <Label for="nombre">
                <IntlMessages id="Nombre" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                disabled={action === actions.READ}
                {...register('nombre', { required: true, maxLength: 50 })}
              />
              {errors.nombre?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El nombre es requerido
                </div>
              )}
              {errors.nombre?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El nombre debe contener máximo 50 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="nombre">
            <FormGroup>
              <Label for="nombre">
                <IntlMessages id="Nombre" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                disabled={action === actions.READ}
                {...register('nombre', { required: true, maxLength: 50 })}
              />
              {errors.nombre?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El nombre es requerido
                </div>
              )}
              {errors.nombre?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El nombre debe contener máximo 50 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>
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

export default FormularioRol;
