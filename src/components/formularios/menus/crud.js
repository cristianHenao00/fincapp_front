/* eslint-disable import/named */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Button, Form, Row } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';

import createNotification from '../../notificaciones/flotantes';
import { obtenerMenu, crearMenu, actualizarMenu } from '../../../services/menu';

const FormularioMenu = ({ cell, accion, funcionCerrar, funcionListar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (accion === 'actualizar' || accion === 'ver') {
      obtenerMenu(cell.data[cell.row.index].id)
        .then((response) => {
          reset(response.data);
        })
        .catch((response) => console.log(response));
    }
  }, []);

  const onSubmit = (data) => {
    if (accion === 'crear') {
      crearMenu(data)
        .then((response) => {
          createNotification(
            'success',
            'Creación exitosa',
            `Se ha creado el menu ${response.data.username}`,
            'filled'
          );
          funcionListar();
        })
        .catch(() =>
          createNotification('error', 'Error', `Error al crear menu`, 'filled')
        );
    } else if (accion === 'actualizar') {
      actualizarMenu(cell.data[cell.row.index].id, data)
        .then((response) => {
          createNotification(
            'success',
            'Actualización exitosa',
            `Se ha actualizado el menu ${response.data.username}`,
            'filled'
          );
          funcionListar();
        })
        .catch(() =>
          createNotification(
            'error',
            'Error',
            `Error al actualizar menu`,
            'filled'
          )
        );
    }
    funcionCerrar();
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
                disabled={accion === 'ver'}
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
          <Colxx xxs="12" className="ruta">
            <FormGroup>
              <Label for="ruta">
                <IntlMessages id="Ruta" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="ruta"
                disabled={accion === 'ver'}
                {...register('ruta', { required: false, maxLength: 50 })}
              />
              {errors.ruta?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  la ruta es requerida
                </div>
              )}
              {errors.ruta?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  la ruta debe contener máximo 50 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12" className="icono">
            <FormGroup>
              <Label for="icono">
                <IntlMessages id="Icono" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="icono"
                disabled={accion === 'ver'}
                {...register('icono', { required: false, maxLength: 100 })}
              />
              {errors.icono?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El icono es requerido
                </div>
              )}
              {errors.icono?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  la direccion del icono es demasiado larga
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        {accion !== 'ver' && (
          <Button outline color="success">
            <IntlMessages id="Guardar" />
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormularioMenu;
