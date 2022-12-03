import { adminRoot } from './config';
import Modules from '../services/modules';

function BuildMenu1(name, path, icon) {
  const title = name;
  const Menu = {
    id: name,
    icon,
    label: title,
    to: `${adminRoot}/${path}`,
  };
  return Menu;
}

function BuildSubs(menus, fatherPath) {
  const subs = menus.map((v, i) => {
    const title = menus[i].name;
    return {
      icon: menus[i].icon,
      label: title,
      to: `${adminRoot}/${fatherPath}/${menus[i].path}`,
    };
  });
  return subs;
}

function BuildMenu3(name, path, icon, menus) {
  const Menu = {
    id: name,
    icon,
    label: name,
    to: `${adminRoot}/${path}`,
    subs: BuildSubs(menus, path),
  };
  return Menu;
}

const data = Modules.map((v, i) => {
  let aux = {};
  const mod = Modules[i];
  if (Modules[i].menus?.length > 0)
    aux = BuildMenu3(mod.name, mod.path, mod.icon, mod.menus);
  else aux = BuildMenu1(mod.name, mod.path, mod.icon);
  return aux;
});

export default data;
