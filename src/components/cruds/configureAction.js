import React from 'react';
import Actions from '../elements/forms/actions';
import { actions } from '../../constants/config';

const ConfigureAction = (configure, menu) => {
  /** Determina que acciones se muestran dependiendo de la configuración del menu */
  const sets = [];
  const forms = [];
  configure.sets.forEach((s, i) => {
    switch (s.title) {
      case actions.READ:
        if (menu.read_action) {
          sets.push(configure.sets[i]);
          forms.push(configure.forms[i]);
        }
        break;
      case actions.UPDATE:
        if (menu.update_action) {
          sets.push(configure.sets[i]);
          forms.push(configure.forms[i]);
        }
        break;
      case actions.DELETE:
        if (menu.delete_action) {
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
  const assignActions = (cell) => {
    return <Actions sets={sets} forms={forms} cell={cell} />;
  };

  return assignActions;
};

export default ConfigureAction;
