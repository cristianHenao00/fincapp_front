import React from 'react';
import { FormGroup } from 'reactstrap';

import { Colxx } from 'components/common/CustomBootstrap';

export default function Select(props) {
  const { nombre, register, validaciones, titulo, opciones, errors } = props;
  return (
    <>
      <Colxx xxs="4" className="mb-4">
        <FormGroup>
          <h5>{titulo}</h5>
          <select
            type="text"
            className="form-control"
            id={nombre}
            {...register(nombre, validaciones[nombre])}
          >
            {opciones[nombre].map((v) => (
              <option value={v.value} key={v.value}>
                {v.mensaje}
              </option>
            ))}
          </select>
          {errors?.[nombre]?.type !== undefined && (
            <div className="invalid-feedback d-block">
              {errors?.[nombre]?.message}
            </div>
          )}
        </FormGroup>
      </Colxx>
    </>
  );
}
