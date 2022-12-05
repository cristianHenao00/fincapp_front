/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { handlerCUD } from './handlerServices';

/**
 *
 * @param {*} title titulo
 * @param {*} closeFunction cierra el modal
 * @param {*} cell dato de la fila de la tabla
 * @param {*} service servicio que consume backend
 * @param {*} nombre si es true hace una consulta con el nombre de otra manera con el id
 * @returns un formulario para eliminar
 */
const DeleteForm = ({ title, closeFunction, cell, service, listFunction }) => {
  const label = `¿Esta seguro que quiere eliminar ${title}?`;

  const handlerDelete = () => {
    handlerCUD(
      service,
      { id: cell.id },
      'Eliminar',
      listFunction,
      closeFunction
    );
  };

  return (
    <>
      <div className="mb-3">
        <h4>{label}</h4>
      </div>
      <hr />
      <Row>
        <Col xs="auto">
          <Button color="danger" onClick={(e) => handlerDelete()}>
            Eliminar
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            color="secondary"
            onClick={() => {
              closeFunction();
            }}
          >
            Cancelar
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default DeleteForm;
