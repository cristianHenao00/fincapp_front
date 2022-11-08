import React from 'react';
import Actions from '../elementos/forms/actions';

const ConfigureAction = (configure, menu) => {
  /** Determina que acciones se muestran dependiendo de la configuración del menu */
  const sets = [];
  const forms = [];
  configure.sets.forEach((s, i) => {
    switch (s.title) {
      case 'ver':
        if (menu.accionVer) {
          sets.push(configure.sets[i]);
          forms.push(configure.forms[i]);
        }
        break;
      case 'actualizar':
        if (menu.accionActualizar) {
          sets.push(configure.sets[i]);
          forms.push(configure.forms[i]);
        }
        break;
      case 'eliminar':
        if (menu.accionEliminar) {
          sets.push(configure.sets[i]);
          forms.push(configure.forms[i]);
        }
        break;
      default:
        sets.push(configure.sets[i]);
        forms.push(configure.forms[i]);
        break;
    }
  });

  /** Asigancion entre el listado de formularios y el de botones */
  const actions = (cell) => {
    return <Actions sets={sets} forms={forms} cell={cell} />;
  };

  return actions;
};

export default ConfigureAction;
