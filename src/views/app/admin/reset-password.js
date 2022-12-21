/*eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Form,
  Row,
  CardBody,
  Card,
  Label,
  FormGroup,
  Col,
  Button,
} from 'reactstrap';
import { handlerCUD } from '../../../components/elements/crud/handlerServices';
import IntlMessages from '../../../helpers/IntlMessages';
import { resetPassword } from '../../../services/resetPassword';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const FormReset = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    handlerCUD(resetPassword(data));
  };

  return (
    <>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit()}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>
                    <IntlMessages id="user.password" />
                  </Label>
                  <Input
                    className="form-control"
                    type="password"
                    name="password"
                    validate={validatePassword}
                  />
                  {errors.password && touched.password && (
                    <div className="invalid-feedback d-block">
                      {errors.password}
                    </div>
                  )}
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>
                    <IntlMessages id="user.password-again" />
                  </Label>
                  <Input
                    className="form-control"
                    type="password"
                    name="passwordAgain"
                    validate={validatePassword}
                  />
                  {errors.passwordAgain && touched.passwordAgain && (
                    <div className="invalid-feedback d-block">
                      {errors.passwordAgain}
                    </div>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button
              color="primary"
              className={`btn-shadow btn-multiple-state`}
              size="lg"
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">
                <IntlMessages id="user.reset-password-button" />
              </span>
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default FormReset;
