/* eslint-disable no-param-reassign */
import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import renderComponents from './renderRoutes';
import Modulos from '../../services/modules';
import AppLayout from '../../layout/AppLayout';

const App = ({ match }) => {
  const rutas = [];

  for (let i = 0; i < Modulos.length; i += 1) {
    rutas[i] = {
      nombre: Modulos[i].nombre,
      ruta: Modulos[i].ruta,
      menus: Modulos[i].menus,
    };
  }

  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/inicio`} />
            {rutas.map((_, i) => {
              const a = [];
              const v = rutas[i];
              if (v.menus?.length > 0) {
                v.menus.map((p, j) => {
                  const m = v.menus[j];
                  a.push(
                    <Route
                      path={`${match.url}/${v.nombre}/${m.nombre}`}
                      render={(props) => {
                        props.menu = m;
                        return renderComponents(m.ruta, props);
                      }}
                      key="llave ciudades"
                    />
                  );
                  return '';
                });
              } else {
                a.push(
                  <Route
                    path={`${match.url}${'/'.concat(v.nombre)}`}
                    render={(props) => renderComponents(v.ruta, props)}
                    key="llave ciudades"
                  />
                );
              }
              return a;
            })}
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
