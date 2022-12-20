import React from 'react';
import { Row, Card, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

import { DoughnutChart } from 'components/charts';
import { doughnutChartData } from 'data/charts';

const Inicio = ({ match }) => {
  return (
    <>
      <Row>
        <Col xs="12">
          <Breadcrumb heading="Bienvenido" match={match} />
          <Separator className="mb-5" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="DASHBOARD" />
              </CardTitle>
              <Row>
                <Col xs="12" lg="6" className="mb-5">
                  <div className="chart-container">
                    <DoughnutChart data={doughnutChartData} />
                  </div>
                  <CardSubtitle className="d-flex justify-content-center align-items-center">
                    <IntlMessages id="Certificados aprobados" />
                  </CardSubtitle>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Inicio;
