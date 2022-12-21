import Input from 'components/elements/forms/input';
import Select from 'components/elements/forms/select';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';

const ConsolidateOrder = () => {
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggle = () => setModal(!modal);

  const confirm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Realizar pedido
      </Button>
      <Modal
        fade={false}
        fullscreen=""
        size="xl"
        isOpen={modal}
        // toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          <h4>Resumen de pedido</h4>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(confirm)}>
            <Row className="justify-content-center">
              <Col xs="10">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Total a pagar</td>
                      <td>$ 100.000</td>
                    </tr>
                    <tr>
                      <td>Dirección</td>
                      <td>
                        <Select
                          name="address"
                          register={register}
                          errors={errors}
                          validation={{}}
                          options={[]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Pagar con</td>
                      <td>
                        <Input
                          type="text"
                          name="payment"
                          register={register}
                          errors={errors}
                          validation={{}}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button color="primary">Confirmar</Button>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ConsolidateOrder;
