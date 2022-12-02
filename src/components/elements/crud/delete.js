/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'reactstrap';
import handlerSN from './handlerSN';

/**
 *
 * @param {*} title titulo
 * @param {*} closeFunction cierra el modal
 * @param {*} cell dato de la fila de la tabla
 * @param {*} service servicio que consume backend
 * @param {*} nombre si es true hace una consulta con el nombre de otra manera con el id
 * @returns un formulario para eliminar
 */
const DeleteForm = ({
  title,
  closeFunction,
  cell,
  service,
  nombre = 'false',
  listFunction = false,
}) => {
  const label = `¿Esta seguro que quiere eliminar ${title}?`;

  const handlerDelete = async (Celda) => {
    let Props = {};
    if (nombre === 'false') {
      Props = { id: Celda.id };
    } else {
      Props = { nombre: Celda.nombre };
    }

    await handlerSN(service, Props, 'Eliminar');
    closeFunction();
    if (listFunction) {
      listFunction().then();
    }
  };

  return (
    <>
      <div className="mb-3">
        <h4>{label}</h4>
      </div>
      <hr />
      <div className="mt-3">
        <Button color="danger" onClick={(e) => handlerDelete(cell)}>
          Eliminar
        </Button>
        <Button
          style={{ backgroundColor: '#5c6b73', color: 'white' }}
          onClick={() => {
            closeFunction();
          }}
        >
          cancelar
        </Button>
      </div>
    </>
  );
};
export default DeleteForm;
