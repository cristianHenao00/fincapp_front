import React from 'react';
import {
  FormGroup,
  Row,
  Card,
  CardBody,
  CardTitle,
  CustomInput,
  Form,
} from 'reactstrap';
import { Colxx } from '../../../common/CustomBootstrap';
import {
  AgregarModuloPerfil,
  EliminarModuloPerfil,
} from '../../../../services/perfil';

const ChecklistPerfil = (props) => {
  const { modulos, idp } = props;

  const checked = (e, idP, idm) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {
      AgregarModuloPerfil(idP, idm)
        .then((response) => console.log('se agrego', response))
        .catch((response) => console.log(response));
    }
    if (isChecked === false) {
      EliminarModuloPerfil(idP, idm)
        .then((response) => console.log('se elimino', response))
        .catch((response) => console.log(response));
    }
  };

  const crearBoxes = (v) => {
    return (
      <CustomInput
        type="checkbox"
        key={`${v.id} ${Math.random()} ${Math.random()} ${Math.random()}`}
        label={v.nombre}
        defaultChecked={v.checked}
        onChange={(e) => checked(e, idp, v.id)}
      />
    );
  };
  return (
    <>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>Listado de módulos</CardTitle>
              <Form>
                <FormGroup>
                  <div>
                    {modulos !== undefined && modulos.map((v) => crearBoxes(v))}
                  </div>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default ChecklistPerfil;
