/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Colxx } from 'components/common/CustomBootstrap';
import { Row } from 'reactstrap';
import Multiselect from 'multiselect-react-dropdown';

const MultiSelect = (props) => {
  const { service, conf, setter, size, title } = props;
  const [unidad, setunidad] = useState([]);
  const options = PushOptions(
    service,
    conf.label,
    conf.valor,
    unidad,
    setunidad
  );

  return (
    <>
      <Colxx xxs={size}>
        <h6 className="d-flex flex-column justify-content-center align-items-center">
          {title}
        </h6>
        <Row className="d-flex flex-column ml-1 mt-2 mb-2">
          <Multiselect
            isObject
            onRemove={(e) => setter(e)}
            onSelect={(e) => setter(e)}
            options={options}
            displayValue="label"
            showCheckbox
          />
        </Row>
      </Colxx>
    </>
  );
};

export default MultiSelect;
