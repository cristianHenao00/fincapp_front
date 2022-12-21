/* eslint-disable camelcase */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, Form, Row } from 'reactstrap';
import Input from 'components/elements/forms/input';
import { useParams } from 'react-router-dom';
import { buy as validation } from 'components/forms/valiadations';
import { getCurrentUser } from 'helpers/Utils';

const idCurrentUser = getCurrentUser().id;

const BuyProduct = ({ cell }) => {
  const { farm_id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { amount } = data;
    const body = {
      amount,
      id_stock: cell.id,
      id_farm: parseInt(farm_id, 10),
      id_user: idCurrentUser,
    };
    console.log(body);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={8}>
            <Input
              type="number"
              name="amount"
              register={register}
              errors={errors}
              vaidation={validation}
            />
          </Col>
          <Col xs={4}>
            <Button color="primary" className="btn-shadow" size="sm">
              <i className="simple-icon-basket" />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default BuyProduct;
