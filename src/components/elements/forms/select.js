import React from 'react';
import { FormGroup, Col, Label } from 'reactstrap';

export default function Select({
  name,
  register,
  validation,
  title,
  options,
  errors,
  disabled,
  size,
}) {
  return (
    <>
      <Col xs={size} className="mb-4">
        <FormGroup>
          {title && <Label for={name}>{title}</Label>}
          <select
            type="text"
            className="form-control"
            id={name}
            {...register(name, validation[name])}
            disabled={disabled}
          >
            <option value={null} key="null">
              Seleccione una opción
            </option>
            {options?.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          {errors?.[name]?.type !== undefined && (
            <div className="invalid-feedback d-block">
              {errors?.[name]?.message}
            </div>
          )}
        </FormGroup>
      </Col>
    </>
  );
}
