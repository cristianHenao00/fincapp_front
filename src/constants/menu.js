import { adminRoot } from './config';
import Modulos from '../services/modulos';

function ConstruirMenu1(name, icon) {
  const title = name;
  const Menu = {
    id: name,
    icon,
    label: title,
    to: `${adminRoot}/${name}`,
  };
  return Menu;
}

function ConstruirSubs(menus, nombrePadre) {
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

function ConstruirMenu3(name, icon, menus) {
  const Menu = {
    id: name,
    icon,
    label: name,
    to: `${adminRoot}/${name}`,
    subs: ConstruirSubs(menus, `${name.toLowerCase()}`),
  };
  return Menu;
}

const data = Modulos.map((v, i) => {
  let aux = {};
  const mod = Modulos[i];
  if (Modulos[i].menus?.length > 0)
    aux = ConstruirMenu3(mod.name, mod.icon, mod.menus);
  else aux = ConstruirMenu1(mod.name, mod.icon);
  return aux;
});

export default data;
