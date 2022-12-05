import React from 'react';
import { UserRole } from '../../constants/config';
import { getCurrentUser } from '../../helpers/Utils';

const currentUser = getCurrentUser();

const inicioAdmin = React.lazy(() => import('./admin/inicio'));
const usuarios = React.lazy(() => import('./admin/usuarios'));
const modules = React.lazy(() => import('./admin/module'));
const menu = React.lazy(() => import('./admin/menu'));
const roles = React.lazy(() => import('./admin/roles'));
const permissions = React.lazy(() => import('./admin/permissions'));

const userInicio = {
  [UserRole.administrator]: inicioAdmin,
};

const components = {
  inicio: userInicio[currentUser.role],
  roles,
  usuarios,
  modules,
  menu,
  permissions,
};

/**
 * @param {*} route the name of the menu to be rendered
 * @param {*} props the properties than the component will receive
 * @returns the component to be rendered
 */
export default function renderRoutes(route, props) {
  const Component = components[route];
  if (!Component) {
    return <components.inicio {...props} />;
  }
  return <Component {...props} />;
}
