import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from 'reactstrap';

import createNotification from '../../notificaciones/flotantes';
import Formulario from '../../formularios/menus/crud';
import { eliminarMenu } from '../../../services/menu';

const AccionModulo = ({ cell, titulo, funcionListar }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [accion, setAccion] = useState('ver');
  const [tooltipVerOpen, setTooltipVerOpen] = useState(false);
  const [tooltipActualizarOpen, setTooltipActualizarOpen] = useState(false);
  const [tooltipEliminarOpen, setTooltipEliminarOpen] = useState(false);

  const funcionEliminar = (id) => {
    eliminarMenu(id)
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

  const funcionCerrar = () => {
    setModalLarge(false);
  };

  return (
    <>
      <Button
        /* outline */
        id="boton-ver"
        color="primary"
        className="glyph-icon simple-icon-eye m-1"
        onClick={() => {
          setAccion('ver');
          setModalLarge(true);
        }}
        type="button"
      >
        <input type="hidden" />
      </Button>
      <Button
        /* outline */
        id="boton-actualizar"
        color="secondary"
        className="glyph-icon simple-icon-pencil m-1"
        onClick={() => {
          setAccion('actualizar');
          setModalLarge(true);
        }}
        type="button"
      >
        <input type="hidden" />
      </Button>
      <Button
        /* outline */
        id="boton-eliminar"
        color="danger"
        className="glyph-icon simple-icon-trash m-1"
        onClick={() => setModalBasic(true)}
        type="button"
      >
        <input type="hidden" />
      </Button>

      <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <div className="modal-header">
          <h5>
            {accion === 'actualizar' ? `Actualizar ${titulo}` : `Ver ${titulo}`}
          </h5>
          <button type="button" className="close" onClick={funcionCerrar}>
            X
          </button>
        </div>
        <ModalBody>
          {accion === 'actualizar' ? (
            <Formulario
              cell={cell}
              accion="actualizar"
              funcionCerrar={funcionCerrar}
              funcionListar={funcionListar}
            />
          ) : (
            <Formulario
              cell={cell}
              accion="ver"
              funcionCerrar={funcionCerrar}
              funcionListar={funcionListar}
            />
          )}
        </ModalBody>
      </Modal>
      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>Eliminar {titulo}</ModalHeader>
        <ModalBody>
          <h6>¿Esta seguro de eliminar el registro?</h6>
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="danger"
            onClick={() => {
              funcionEliminar(cell.data[cell.row.index].id);
              funcionListar();
              setModalBasic(false);
            }}
          >
            Sí
          </Button>{' '}
          <Button
            outline
            color="primary"
            onClick={() => {
              setModalBasic(false);
            }}
          >
            No
          </Button>
        </ModalFooter>
      </Modal>

      <Tooltip
        placement="buttom"
        isOpen={tooltipVerOpen}
        target="boton-ver"
        toggle={() => setTooltipVerOpen(!tooltipVerOpen)}
      >
        Ver
      </Tooltip>
      <Tooltip
        placement="buttom"
        isOpen={tooltipActualizarOpen}
        target="boton-actualizar"
        toggle={() => setTooltipActualizarOpen(!tooltipActualizarOpen)}
      >
        Actualizar
      </Tooltip>
      <Tooltip
        placement="buttom"
        isOpen={tooltipEliminarOpen}
        target="boton-eliminar"
        toggle={() => setTooltipEliminarOpen(!tooltipEliminarOpen)}
      >
        Eliminar
      </Tooltip>
    </>
  );
};

export default AccionModulo;
