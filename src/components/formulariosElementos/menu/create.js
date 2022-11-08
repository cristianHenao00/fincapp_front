/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Row, Form, FormGroup } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';

import Input from '../../elementos/forms/input';
import { menu } from '../validaciones';
import handlerSN from '../../elementos/crud/handlerSN';
import { crearMenu } from '../../../services/menu';

/**
 * @param {listFunction} refresca la pagina
 * @param {closeFunction} cierra el modal donde esta contenido
 * @returns  crea un formulario con validaciones
 */
const Create = (props) => {
  const { closeFunction } = props;
  const validation = menu;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handlerSN(crearMenu, { body: data }, 'Crear');
    console.log(props);
    closeFunction();
  };

  return (
    <>
      <h1>Crear menu</h1>
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
            title="ruta"
            name="ruta"
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

        <Row mb-12>
          <Input
            type="checkbox"
            title="Acción ver"
            name="accionVer"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
          />
          <Input
            type="checkbox"
            title="Acción crear"
            name="accionCrear"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
          />
          <Input
            type="checkbox"
            title="Acción actualizar"
            name="accionActualizar"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
          />
          <Input
            type="checkbox"
            title="Acción eliminar"
            name="accionEliminar"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
          />
        </Row>
        <br />
        <Button color="success">
          <IntlMessages id="Registrar" />
        </Button>
      </Form>
    </>
  );
};

export default Create;
