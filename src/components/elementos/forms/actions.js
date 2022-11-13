/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../common/CustomBootstrap';
import ButtonMF from './buttonMF';

/**
 * @returns
 */
const Actions = (sets) => {
  const Sets = sets.sets;
  const Forms = sets.forms;
  const Cell = sets.cell;
  const Service = sets.service;
  const { listFunction } = sets;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          {Sets.map((v, i) => {
            return (
              <ButtonMF
                listFunction={listFunction}
                set={Sets[i]}
                form={Forms[i]}
                key={i}
                cell={Cell}
                service={Service}
              />
            );
          })}
        </Colxx>
      </Row>
    </>
  );
};

export default Actions;
