/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Row, Form } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import Input from '../../elementos/forms/input';

/**
 * @param {listFunction} refresca la pagina
 * @param {closeFunction} cierra el modal donde esta contenido
 * @returns  Muestra el formulario
 */
const Read = (props) => {
  const { closeFunction, cell } = props;
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    closeFunction();
  };

  return (
    <>
      <h1>
        <strong>Ver Modulo</strong>
      </h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            title="nombre"
            name="nombre"
            size="12"
            disabled="true"
            mssg={cell.nombre}
            show="true"
          />
        </Row>
        <Row>
          <Input
            title="descripción"
            name="descripcion"
            size="12"
            disabled="true"
            mssg={cell.descripcion}
            show="true"
          />
        </Row>
        <Row mb-4>
          <Input
            title="icono"
            name="icono"
            size="12"
            disabled="true"
            mssg={cell.icono}
            show="true"
          />
        </Row>

        <Button color="success" className="mt-3">
          <IntlMessages id="Salir" />
        </Button>
      </Form>
    </>
  );
};

export default Read;
