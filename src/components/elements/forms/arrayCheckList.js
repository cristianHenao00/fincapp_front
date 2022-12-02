/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Colxx } from 'components/common/CustomBootstrap';
import { FormGroup } from 'reactstrap';
import { useFieldArray } from 'react-hook-form';

const processing = ({ name, register, title, size, fields }) => {
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
            <li key={item.label}>
              <input
                type="checkbox"
                {...register(`${name}.${index}.value`)}
                defaultChecked={item.value}
                className="mr-3"
              />
              {item.label}
            </li>
          ))}
        </FormGroup>
      </Colxx>
    </>
  );
};

/**
 *
 * @param {*} param0
 * @returns  me devuelve el listado de items con su valor
 */
const CheckList = ({ name, title, register, control, size, options }) => {
  const { fields, append } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    options.forEach((v) => append(v));
  }, []);

  return processing({ name, register, title, size, fields });
};
export default CheckList;
