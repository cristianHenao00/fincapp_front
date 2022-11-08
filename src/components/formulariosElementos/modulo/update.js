/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Row, Form } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { actualizarModulo } from '../../../services/modulos';
import handlerSN from '../../elementos/crud/handlerSN';
import Input from '../../elementos/forms/input';

import { modulo } from '../validaciones';

/**
 * @param {listFunction} refresca la pagina
 * @param {closeFunction} cierra el modal donde esta contenido
 * @returns  actualiza un formulario con validaciones
 */
const Update = (props) => {
  const validation = modulo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { cell, closeFunction } = props;

  const onSubmit = (data) => {
    handlerSN(actualizarModulo, { id: cell.id, body: data }, 'Actualización');
    closeFunction();
  };

  return (
    <>
      <h1>Actualizar modulo</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            title="nombre"
            name="nombre"
            register={register}
            validation={validation}
            errors={errors}
            size="12"
            mssg={cell.nombre}
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
            mssg={cell.descripcion}
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
            mssg={cell.icono}
          />
        </Row>

        <Button color="success">
          <IntlMessages id="Registrar" />
        </Button>
      </Form>
    </>
  );
};

export default Update;
