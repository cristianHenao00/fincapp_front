import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

import IntlMessages from '../../../helpers/IntlMessages';

import FormularioUsuario from '../../formularios/usuario/crud';

const FormularioModal = ({ titulo, funcionListar }) => {
  const [modalLarge, setModalLarge] = useState(false);

  const funcionCerrar = () => {
    setModalLarge(false);
  };

  return (
    <>
      <div>
        <Button
          className="mr-2 mb-2"
          color="success"
          onClick={() => setModalLarge(true)}
        >
          <IntlMessages id="Crear usuario" />
        </Button>

        <Modal
          isOpen={modalLarge}
          size="lg"
          toggle={() => setModalLarge(!modalLarge)}
        >
          <div className="modal-header">
            <h5>{titulo}</h5>
            <button type="button" className="close" onClick={funcionCerrar}>
              X
            </button>
          </div>
          <ModalBody>
            <FormularioUsuario
              accion="crear"
              funcionCerrar={funcionCerrar}
              funcionListar={funcionListar}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default FormularioModal;
