import React from 'react';
import Select from 'react-select';
import { Colxx } from 'components/common/CustomBootstrap';
import { FormGroup, Label } from 'reactstrap';

const AutoInput = ({
  name,
  options,
  size,
  title,
  register,
  setValue,
  selectedValue,
}) => {
  return (
    <>
      <Colxx xxs={size}>
        <FormGroup>
          {title !== undefined && (
            <Label>{title.charAt(0).toUpperCase() + title.slice(1)}</Label>
          )}
          <Select
            options={options}
            onChange={(e) => setValue(name, e.value)}
            name="select"
            /* isClearable */
            isSearchable
            defaultValue={selectedValue}
          />
          <input type="hidden" id={name} {...register(name)} />
        </FormGroup>
      </Colxx>
    </>
  );
};

export default AutoInput;
