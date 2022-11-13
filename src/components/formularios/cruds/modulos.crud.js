/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Button, Form, Row } from 'reactstrap';
import { Colxx } from '../../common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { actions } from '../../../constants/config';
import createNotification from '../../notificaciones/flotantes';
import {
  obtenerModulo,
  crearModulo,
  actualizarModulo,
} from '../../../services/modulos';

const FormularioModulo = ({ cell, action, closeFunction, listFunction }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (action === actions.UPDATE || action === actions.READ) {
      obtenerModulo(cell.data[cell.row.index].id)
        .then((response) => {
          reset(response.data);
        })
        .catch((response) => console.log(response));
    }
  }, []);

  const onSubmit = (data) => {
    if (action === actions.CREATE) {
      crearModulo(data)
        .then((response) => {
          createNotification(
            'success',
            'Creación exitosa',
            `Se ha creado el modulo ${response.data.username}`,
            'filled'
          );
          listFunction();
        })
        .catch(() =>
          createNotification(
            'error',
            'Error',
            `Error al crear modulo`,
            'filled'
          )
        );
    } else if (action === actions.UPDATE) {
      actualizarModulo(cell.data[cell.row.index].id, data)
        .then((response) => {
          createNotification(
            'success',
            'Actualización exitosa',
            `Se ha actualizado el modulo ${response.data.username}`,
            'filled'
          );
          listFunction();
        })
        .catch(() =>
          createNotification(
            'error',
            'Error',
            `Error al actualizar modulo`,
            'filled'
          )
        );
    }
    closeFunction();
    reset();
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
          <Colxx xxs="12" className="descripcion">
            <FormGroup>
              <Label for="descripcion">
                <IntlMessages id="Descripcion" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="descripcion"
                disabled={action === actions.READ}
                {...register('descripcion', {
                  required: false,
                  maxLength: 1000,
                })}
              />
              {errors.descripcion?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  la descripcion es requerida
                </div>
              )}
              {errors.descripcion?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  la descripcion debe contener máximo 1000 caractéres
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

export default FormularioModulo;
