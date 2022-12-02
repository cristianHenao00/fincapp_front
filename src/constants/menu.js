import { adminRoot } from './config';
import Modules from '../services/modules';

function BuildMenu1(name, icon) {
  const title = name;
  const Menu = {
    id: name,
    icon,
    label: title,
    to: `${adminRoot}/${name}`,
  };
  return Menu;
}

function BuildSubs(menus, nombrePadre) {
  const subs = menus.map((v, i) => {
    const title = menus[i].name;
    return {
      icon: menus[i].icon,
      label: title,
      to: `${adminRoot}/${nombrePadre}/${menus[i].name}`,
    };
  });
  return subs;
}

function BuildMenu3(name, icon, menus) {
  const Menu = {
    id: name,
    icon,
    label: name,
    to: `${adminRoot}/${name}`,
    subs: BuildSubs(menus, `${name.toLowerCase()}`),
  };
  return Menu;
}

const data = Modules.map((v, i) => {
  let aux = {};
  const mod = Modules[i];
  if (Modules[i].menus?.length > 0)
    aux = BuildMenu3(mod.name, mod.icon, mod.menus);
  else aux = BuildMenu1(mod.name, mod.icon);
  return aux;
});

export default data;
