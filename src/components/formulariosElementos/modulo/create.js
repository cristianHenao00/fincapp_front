/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Row, Form } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { crearModulo } from '../../../services/modulos';
import Input from '../../elementos/forms/input';
import handlerSN from '../../elementos/crud/handlerSN';

import { modulo } from '../validaciones';

/**
 * @param {listFunction} refresca la pagina
 * @param {closeFunction} cierra el modal donde esta contenido
 * @returns  crea un formulario con validaciones
 */
const Create = (props) => {
  const { listFunction, closeFunction } = props;
  const validation = modulo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handlerSN(crearModulo, { body: data }, 'Crear');
    closeFunction();
  };

  return props ? (
    <>
      <h1>Crear modulo</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            title="nombre"
            name="nombre"
            register={register}
            validation={validation}
            errors={errors}
            size="12"
          />
        </Row>
        <Row>
          <Input
            title="descripción"
            name="descripcion"
            register={register}
            validation={validation}
            errors={errors}
            size="12"
          />
        </Row>
        <Row mb-4>
          <Input
            title="icono"
            name="icono"
            register={register}
            validation={validation}
            errors={errors}
            size="12"
          />
        </Row>

        <Button color="success">
          <IntlMessages id="Registrar" />
        </Button>
      </Form>
    </>
  ) : null;
};

export default Create;
