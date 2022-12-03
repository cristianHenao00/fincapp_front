/* eslint-disable no-param-reassign */
import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import renderComponent from './renderRoutes';
import Modules from '../../services/modules';
import AppLayout from '../../layout/AppLayout';

const App = ({ match }) => {
  const paths = [];

  for (let i = 0; i < Modules.length; i += 1) {
    paths[i] = {
      name: Modules[i].name,
      path: Modules[i].path,
      menus: Modules[i].menus,
    };
  }

  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/inicio`} />
            {paths.map((_, i) => {
              const routes = [];
              const renderModule = paths[i];
              if (renderModule.menus.length === 0) {
                routes.push(
                  <Route
                    path={`${match.url}/${renderModule.path}`}
                    render={(props) =>
                      renderComponent(renderModule.path, props)
                    }
                    key="llave ciudades"
                  />
                );
              } else {
                renderModule.menus.forEach((p, j) => {
                  const menu = renderModule.menus[j];
                  console.log(`${match.url}/${renderModule.path}/${menu.path}`);
                  routes.push(
                    <Route
                      path={`${match.url}/${renderModule.path}/${menu.path}`}
                      render={(props) => {
                        props.menu = menu;
                        console.log('props', menu);
                        return renderComponent(menu.path, props);
                      }}
                      key="llave ciudades"
                    />
                  );
                });
              }
              return routes;
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
