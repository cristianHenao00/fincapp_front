import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthGuardActive, UserRole } from '../constants/config';
import { getCurrentUser } from './Utils';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const setComponent = (props) => {
    if (isAuthGuardActive) {
      const currentUser = getCurrentUser();
      if (currentUser) {
        if (UserRole[currentUser.role]) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/unauthorized',
              state: { from: props.location },
            }}
          />
        );
      }
      return (
        <Redirect
          to={{
            pathname: '/user/login',
            state: { from: props.location },
          }}
        />
      );
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={setComponent} />;
};

// eslint-disable-next-line import/prefer-default-export
export { ProtectedRoute };
