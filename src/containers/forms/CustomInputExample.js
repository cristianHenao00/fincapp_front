import React from 'react';
import { FormGroup, Label, CustomInput, Form } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';

const CustomInputExample = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exCustomCheckbox">
          <IntlMessages id="Los menus seleccionados" />
        </Label>
        <div>
          <CustomInput type="checkbox" id="exCustomCheckbox" label="primero" />
          <CustomInput type="checkbox" id="exCustomCheckbox2" label="segundo" />
          <CustomInput type="checkbox" id="exCustomCheckbox3" label="tercero" />
        </div>
      </FormGroup>
    </Form>
  );
};

export default CustomInputExample;
