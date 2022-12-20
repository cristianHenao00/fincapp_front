/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardBody, CardGroup, CardTitle, Col, Row } from 'reactstrap';
import { Separator } from 'components/common/CustomBootstrap';
import SliderExamples from 'containers/forms/SliderExamples';
import BreadcrumbContainer from 'containers/navs/Breadcrumb';
// import IntlMessages from 'helpers/IntlMessages';

// const elementos = [
//   'Certificados aprobados',
//   'Certificados rechazados',
//   'Certificados pendientes',
//   'Certificados en proceso',
//   'Certificados finalizados',
//   'Certificados cancelados',
//   'Certificados en espera',
// ];

const Home = ({ match }) => {
  return (
    <>
      <Row>
        <Col xs="12">
          <BreadcrumbContainer heading="Bienvenido" match={match} />
          <Separator className="mb-5" />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <SliderExamples />
        </Col>
      </Row>
    </>
  );
};

export default Home;
