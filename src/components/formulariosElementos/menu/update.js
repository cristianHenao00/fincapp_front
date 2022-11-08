/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Row, Form } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';

import { actualizarMenu, buscarMenu } from '../../../services/menu';
import Input from '../../elementos/forms/input';
import { menu } from '../validaciones';
import handlerSN from '../../elementos/crud/handlerSN';

/**
 * @param {listFunction} refresca la pagina
 * @param {closeFunction} cierra el modal donde esta contenido
 * @param {cell} valores valores de la tabla
 *
 * @returns  actualiza un formulario con validaciones
 */
const Update = (props) => {
  const validation = menu;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { cell, closeFunction } = props;

  const onSubmit = (data) => {
    console.log(data);
    handlerSN(actualizarMenu, { id: cell.id, body: data }, 'Actualización');
    closeFunction();
  };

  const [dataDefault, setDataDefault] = useState([]);

  useEffect(() => {
    buscarMenu({ id: cell.id }).then((response) =>
      setDataDefault(response.data)
    );
  }, []);

  return (
    <>
      <h1>Actualizar Menu</h1>
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
            title="ruta"
            name="ruta"
            register={register}
            validation={validation}
            errors={errors}
            size="12"
            mssg={cell.ruta}
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

        <Row mb-12>
          <Input
            type="checkbox"
            title="Acción ver"
            name="accionVer"
            validation={validation}
            errors={errors}
            size="3"
            mssg={dataDefault.accionVer}
            show="true"
          />
          <Input
            title="Acción crear"
            name="accionCrear"
            register={register}
            type="checkbox"
            validation={validation}
            errors={errors}
            size="3"
            mssg={dataDefault.accionCrear}
            show="true"
          />
          <Input
            title="Acción actualizar"
            name="accionActualizar"
            register={register}
            type="checkbox"
            validation={validation}
            errors={errors}
            size="3"
            mssg={dataDefault.accionActualizar}
            show="true"
          />
          <Input
            title="Acción eliminar"
            name="accionEliminar"
            register={register}
            type="checkbox"
            validation={validation}
            errors={errors}
            size="3"
            mssg={dataDefault.accionEliminar}
            show="true"
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

export default Update;
