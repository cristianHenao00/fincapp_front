/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  FormGroup,
  Label,
  Row,
  Card,
  CardBody,
  CardTitle,
  CustomInput,
  Form,
} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

import createNotification from '../../../notificaciones/flotantes';
import {
  agregarMenuModulo,
  eliminarMenuModulo,
} from '../../../../services/modulos';

const CheckList = (props) => {
  const { lista, idModulo } = props;

  const funcionAgregar = (idMenu, idMod) => {
    agregarMenuModulo(idMenu, idMod)
      .then(() =>
        createNotification(
          'success',
          'Accion exitosa',
          `Se ha agregado el menu`,
          'filled'
        )
      )
      .catch(() =>
        createNotification(
          'error',
          'Error',
          `Error no se ha agregado el menu`,
          'filled'
        )
      );
  };
  const funcionEliminar = (idMenu, idMod) => {
    eliminarMenuModulo(idMenu, idMod)
      .then(() =>
        createNotification(
          'success',
          'Eliminación exitosa',
          `Se ha eliminado el menu`,
          'filled'
        )
      )
      .catch(() =>
        createNotification('error', 'Error', `Error al eliminar menu`, 'filled')
      );
  };

  const checked = (e, idMod, idMenu) => {
    const isChecked = e.target.checked;
    if (isChecked) funcionAgregar(idMenu, idMod);
    else funcionEliminar(idMenu, idMod);
  };

  const crearBoxes = (v) => {
    console.log(v);
    return (
      <CustomInput
        type="checkbox"
        key={v.id}
        label={v.nombre}
        defaultChecked={v.estado}
        onChange={(event) => checked(event, idModulo, v.id)}
      />
    );
  };

  return (
    <>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="Listado de menus" />
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exCustomCheckbox">
                    <IntlMessages id="Los menus seleccionados" />
                  </Label>
                  <div>{lista.map((v) => crearBoxes(v))}</div>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default CheckList;
