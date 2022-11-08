/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Row, Form } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';

import Input from '../../elementos/forms/input';
import { menu } from '../validaciones';
import { buscarMenu } from '../../../services/menu';

/**
 * @param {listFunction} refresca la pagina
 * @param {closeFunction} cierra el modal donde esta contenido
 * @returns  Muestra el formulario
 */
const Read = (props) => {
  const { closeFunction, cell } = props;
  const validation = menu;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    closeFunction();
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    buscarMenu({ id: cell.id }).then((response) => setData(response.data));
  }, []);

  return (
    <>
      <h1>
        <strong>Ver Menu</strong>
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
            title="ruta"
            name="ruta"
            size="12"
            show="true"
            disabled="true"
            mssg={cell.ruta}
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

        <Row mb-12>
          <Input
            type="checkbox"
            title="Acción ver"
            name="accionVer"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
            disabled="true"
            mssg={data.accionVer}
            show="true"
          />
          <Input
            type="checkbox"
            title="Acción crear"
            name="accionCrear"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
            disabled="true"
            mssg={data.accionCrear}
            show="true"
          />
          <Input
            type="checkbox"
            title="Acción actualizar"
            name="accionActualizar"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
            disabled="true"
            mssg={data.accionActualizar}
            show="true"
          />
          <Input
            type="checkbox"
            title="Acción eliminar"
            name="accionEliminar"
            register={register}
            validation={validation}
            errors={errors}
            size="3"
            disabled="true"
            mssg={data.accionEliminar}
            show="true"
          />
        </Row>
        <br />

        <Button color="success" className="mt-3">
          <IntlMessages id="Salir" />
        </Button>
      </Form>
    </>
  );
};

export default Read;
