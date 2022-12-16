import React from 'react';
import { CustomInput, FormGroup, Col } from 'reactstrap';
import { handlerCUD } from '../crud/handlerServices';

/**
 *
 * @param {*} name nombre de componente que se registrara dentro del data del formulario
 * @param {*} register componente del formulario para registrar los cambio en input
 * @param {*} title titulo del encabezado
 * @param {*} size tamaño de la columna
 * @param {*} field campo donde se encuentra los datos para renderizar el input
 * @param {*} operations operaciones que se haran dependiendo de los cambios de los input
 * @param {*} ID es el elemento al cual se le va asignar
 * @returns un checklist completo para utilizar
 */
const CheckList = ({
  name,
  register,
  title,
  size,
  fields,
  operations,
  parent,
}) => {
  // el id es el que va hacer agregado
  const handlerChange = (child, e) => {
    const data = {
      body: {
        parent,
        child,
      },
    };
    if (e.target.checked === true) {
      handlerCUD(operations.assign, data, 'Asignar');
    } else {
      handlerCUD(operations.unassign, data, 'Desasignar');
    }
  };
  return (
    <>
      <Col xs={size}>
        <FormGroup>
          {title === undefined && (
            <h5>{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
          )}
          {title !== undefined && (
            <h5>{title.charAt(0).toUpperCase() + title.slice(1)}</h5>
          )}
          {fields.map((item, index) => (
            <CustomInput
              type="checkbox"
              key={`${
                item.id
              } ${Math.random()} ${Math.random()} ${Math.random()}`}
              label={item.tag}
              defaultChecked={item.value}
              onChangeCapture={(e) => handlerChange(item.theId, e)}
              {...register(`${name}.${index}.value`)}
            />
          ))}
        </FormGroup>
      </Col>
    </>
  );
};
export default CheckList;
