import Component from 'components/elements/forms/components';

const ConfigureComponents = (configure) => {
  /** Determina que acciones se muestran dependiendo de la configuración del menu */

  const components = [];
  configure.components.forEach((s, i) => {
    components.push(configure.components[i]);
  });

  /** Asigancion entre el listado de formularios y el de botones */
  const assignComponent = (cell, index) => {
    return Component(components, cell, index);
  };

  return assignComponent;
};

export default ConfigureComponents;
