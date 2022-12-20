/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Modal, Tooltip, ModalBody } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';

/**  
    @param {listFunction} listFunction metodo que refresca la pagina
    @param {form} form es una funcion que retorna el formulario
    @param {cell} cell es la informacion de la casilla
    @param {set} set es la informacion del boton
    @param {origin} origin me indica en donde estoy utilizando el buttonmf en landingpage o dentro
    @returns crea un boton que contiene un modal y dentro un formulario
*/
const ButtonMF = ({ listFunction, set, form, cell, origen, service }) => {
  const [modal, setModal] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const closeFunction = () => {
    setModal(false);
  };

  const ButtonAprobar = () => {
    const [data, setData] = useState({});

    service({ nombre: cell.nombre, setter: setData });

    let estado;

    if (data.estado !== 'Aprovado') {
      estado = false;
    } else {
      estado = 'true';
    }

    return (
      <Button
        hidden={estado}
        size="sm"
        className={set.icon}
        id={set.label}
        color={set.color}
        onClick={() => setModal(true)}
      />
    );
  };

  const NormalButton = () => {
    let component;
    if (set.icon === '') {
      component = (
        <>
          <Button
            size="sm"
            className={set.icon}
            id={set.label}
            color={set.color}
            onClick={() => setModal(true)}
          >
            {set.label}
          </Button>
        </>
      );
    } else {
      component = (
        <>
          <Button
            size="xs"
            className={set.icon}
            id={set.label}
            color={set.color}
            onClick={() => setModal(true)}
          />
        </>
      );
    }

    return component;
  };
  return (
    <>
      {NormalButton()}

      {form ? (
        <Modal isOpen={modal} size={set.size} toggle={() => setModal(!modal)}>
          <div className="modal-header">
            <h4>{set.title}</h4>
            <button type="button" className="close" onClick={closeFunction}>
              {' '}
              X{' '}
            </button>
          </div>
          <ModalBody>
            {form(listFunction, closeFunction, cell, origen)}
          </ModalBody>
        </Modal>
      ) : null}

      <Tooltip
        placement="buttom"
        isOpen={tooltip}
        target={set.label}
        toggle={() => setTooltip(!tooltip)}
      >
        {set.label}
      </Tooltip>
    </>
  );
};

export default ButtonMF;
