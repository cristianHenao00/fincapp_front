/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../common/CustomBootstrap';
import ButtonMF from './buttonMF';

/**
 * @returns
 */
const Actions = (props) => {
  const { sets, forms, cell, service, listFunction } = props;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          {sets.map((v, i) => {
            return (
              <ButtonMF
                listFunction={listFunction}
                set={sets[i]}
                form={forms[i]}
                key={i}
                cell={cell}
                service={service}
              />
            );
          })}
        </Colxx>
      </Row>
    </>
  );
};

export default Actions;
