/* eslint-disable camelcase */
import React from 'react';
import { UserRole } from '../../constants/config';
import { getCurrentUser } from '../../helpers/Utils';

const currentUser = getCurrentUser();

const homeAdmin = React.lazy(() => import('./admin/home'));
const users = React.lazy(() => import('./admin/users'));
const modules = React.lazy(() => import('./admin/module'));
const menu = React.lazy(() => import('./admin/menu'));
const roles = React.lazy(() => import('./admin/roles'));
const permissions = React.lazy(() => import('./admin/permissions'));
const categories = React.lazy(() => import('./admin/categories'));
const admin_products = React.lazy(() => import('./admin/products'));

const userHome = {
  [UserRole.administrator]: homeAdmin,
};

const components = {
  home: userHome[currentUser.role],
  roles,
  users,
  modules,
  menu,
  permissions,
  categories,
  admin_products,
};

/**
 * @param {*} route the name of the menu to be rendered
 * @param {*} props the properties than the component will receive
 * @returns the component to be rendered
 */
export default function renderRoutes(route, props) {
  const Component = components[route];
  if (!Component) {
    return <components.home {...props} />;
  }
  return <Component {...props} />;
}
