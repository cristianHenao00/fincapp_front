import React from 'react';
import { Row, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import { DoughnutChart } from '../../../components/charts';
import { doughnutChartData } from '../../../data/charts';

const Inicio = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Bienvenido" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="DASHBOARD" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" lg="6" className="mb-5">
                  <div className="chart-container">
                    <DoughnutChart data={doughnutChartData} />
                  </div>
                  <CardSubtitle className="d-flex justify-content-center align-items-center">
                    <IntlMessages id="Certificados aprobados" />
                  </CardSubtitle>
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default Inicio;
