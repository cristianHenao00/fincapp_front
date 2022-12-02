import React, { useState } from 'react';
import IntlMessages from 'helpers/IntlMessages';
import { Modal, ModalBody } from 'reactstrap';

const Terminos = (props) => {
  const { text, setter } = props;

  const [modal, setModal] = useState(false);

  const closeFunction = () => {
    setModal(false);
  };
  const handlerChange = (e) => {
    if (e.target.checked) {
      setModal(true);
      setter(false);
    } else {
      setModal(false);
      setter('true');
    }
  };
  return (
    <>
      <input type="checkbox" className="mr-3" onChange={handlerChange} />
      <IntlMessages id="Acepto terminos y condiciones" />

      <Modal isOpen={modal} size="lg" toggle={() => setModal(!modal)}>
        <div className="modal-header">
          <h4>Terminos y condiciones</h4>
          <button type="button" className="close" onClick={closeFunction}>
            {' '}
            X{' '}
          </button>
        </div>
        <ModalBody>
          <IntlMessages id={text} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Terminos;
