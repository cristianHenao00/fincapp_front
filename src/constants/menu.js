import { adminRoot } from './config';
import Modulos from '../services/modulos';

function ConstruirMenu1(nombre, icon) {
  const title = nombre;
  const Menu = {
    id: nombre,
    icon,
    label: title,
    to: `${adminRoot}/${nombre}`,
  };
  return Menu;
}

function ConstruirSubs(menus, nombrePadre) {
  const subs = menus.map((v, i) => {
    const title = menus[i].nombre;
    return {
      icon: menus[i].icono,
      label: title,
      to: `${adminRoot}/${nombrePadre}/${menus[i].nombre}`,
    };
  });
  return subs;
}

function ConstruirMenu3(nombre, icon, menus) {
  const Menu = {
    id: nombre,
    icon,
    label: nombre,
    to: `${adminRoot}/${nombre}`,
    subs: ConstruirSubs(menus, `${nombre.toLowerCase()}`),
  };
  return Menu;
}

const data = Modulos.map((v, i) => {
  let aux = {};
  const mod = Modulos[i];
  if (Modulos[i].menus?.length > 0)
    aux = ConstruirMenu3(mod.nombre, mod.icono, mod.menus);
  else aux = ConstruirMenu1(mod.nombre, mod.icono);
  return aux;
});

export default data;
