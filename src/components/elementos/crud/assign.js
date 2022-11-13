/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
import React, { useState, useEffect } from 'react';
import { Button, Form, Card, CardBody } from 'reactstrap';
import { useForm, useFieldArray } from 'react-hook-form';
import IntlMessages from '../../../helpers/IntlMessages';
import CheckList from '../forms/checkList';
import getData from '../../cruds/arrangeData';

/**
 *
 * @param {*} msgs mensaje de la cabecera
 * @param {*} listFunction servicio que enlista los elementos ha asignar
 * @param {*} assignService servicios para asignar un elemento a otro
 * @param {*} unAssignService servicios para desasignar un elemento a otro
 * @param {*} cell contiene los datos de la fila
 *
 * @returns
 */
const Assign = (props) => {
  const { msgs, listFunction, AssignService, unAssignService, cell } = props;

  const { register, control, handleSubmit } = useForm();

  const [data1, setData] = useState({});
  const { fields, append } = useFieldArray({
    control,
    name: 'checklist',
  });

  const optionsChecklist = [];
  const newData = getData(
    setData,
    listFunction,
    data1,
    ['id', 'nombre', 'checked'],
    { id: cell.id }
  );

  if (newData.length > 0) {
    newData.forEach((v) => {
      optionsChecklist.push({ tag: v.nombre, ID: v.id, valor: v.checked });
    });
  }

  useEffect(() => {
    if (fields.length < newData.length) {
      optionsChecklist.forEach((v) => append(v));
    }
  }, [newData]);

  const onSubmit = (data) => console.log(data);
  return (
    <>
      {newData.length > 0 && (
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <CheckList
                operations={{
                  assign: AssignService,
                  unAssign: unAssignService,
                }}
                name={msgs}
                title={msgs}
                register={register}
                size="6"
                fields={fields}
                ID={cell.id}
              />
            </Form>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Assign;
