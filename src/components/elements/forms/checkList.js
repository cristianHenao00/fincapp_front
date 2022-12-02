import React from 'react';
import { FormGroup } from 'reactstrap';
import { Colxx } from '../../common/CustomBootstrap';
import handlerSN from '../crud/handlerSN';

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
const CheckList = ({ name, register, title, size, fields, operations, ID }) => {
  // el id es el que va hacer agregado
  const handlerChange = (id, e) => {
    if (e.target.checked === true) {
      const service = operations.assign;
      const body = {
        body: {
          menuId: id,
          moduloId: ID,
        },
      };
      handlerSN(service, body, 'Asignar');
    } else {
      const service = operations.unAssign;
      const body = {
        menuId: id,
        moduloId: ID,
      };
      handlerSN(service, body, 'Desasignar');
    }
  };
  return (
    <>
      <Colxx xxs={size}>
        <FormGroup>
          {title === undefined && (
            <h5>{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
          )}
          {title !== undefined && (
            <h5>{title.charAt(0).toUpperCase() + title.slice(1)}</h5>
          )}
          {fields.map((item, index) => (
            <li key={item.id}>
              <input
                type="checkbox"
                {...register(`${name}.${index}.valor`)}
                defaultChecked={(item.valor === 'Si' && true) || false}
                className="mr-3"
                onChange={(e) => handlerChange(item.ID, e)}
              />
              {item.tag}
            </li>
          ))}
        </FormGroup>
      </Colxx>
    </>
  );
};
export default CheckList;
