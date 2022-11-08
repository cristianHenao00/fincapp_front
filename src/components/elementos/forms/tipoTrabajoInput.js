/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { FormGroup, Label } from 'reactstrap';

import { Colxx } from 'components/common/CustomBootstrap';
import { listarTipoDetrabajo } from 'services/tipoDeTrabajo';

export default function Select(props) {
  const [tiposTrabajo, setTipoTrabajo] = useState([]);

  useEffect(() => {
    listarTipoDetrabajo().then((response) => setTipoTrabajo(response.data));
  }, []);

  const { name, register, title, errors, size } = props;
  return (
    <>
      <Colxx xxs={size} className="mb-4">
        <FormGroup>
          <Label>{title}</Label>
          <select className="form-control" id={name} {...register(name)}>
            <option>Seleccione uno</option>
            {tiposTrabajo.map((v) => (
              <option value={v.id} key={v.id}>
                {v.descripcion}
              </option>
            ))}
          </select>
          {errors?.[name]?.type !== undefined && (
            <div className="invalid-feedback d-block">
              {errors?.[name]?.message}
            </div>
          )}
        </FormGroup>
      </Colxx>
    </>
  );
}
