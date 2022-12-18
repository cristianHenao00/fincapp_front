import createNotification from './flotantes';

/**
 *
 * @param {*} service el servicio a ejecutar
 * @param {*} props la informacion del servicio
 * @param {*} msgs el titulo de la notificacion
 */
export const handlerCUD = (
  service,
  props,
  msgs,
  listFunction,
  closeFunction,
  reset
) => {
  service(props)
    .then(() => {
      createNotification('success', msgs, 'Operación exitosa', 'filled');
      listFunction();
      if (reset) {
        reset();
      }
      closeFunction();
    })
    .catch((error) => {
      console.log(error);
      createNotification('danger', msgs, 'Oops hubo un error', 'filled');
    });
};

export const handlerGetData = (service, msgs) => {
  return service()
    .then((response) => {
      createNotification('success', msgs, 'Operación exitosa', 'filled');
      return response.data;
    })
    .catch(() => {
      createNotification('danger', msgs, 'Oops hubo un error', 'filled');
      return [];
    });
};
export const handlerGetSingleData = (service, props, msgs) => {
  return service(props)
    .then((response) => {
      createNotification('success', msgs, 'Operación exitosa', 'filled');
      return response.data;
    })
    .catch(() => {
      createNotification('danger', msgs, 'Oops hubo un error', 'filled');
      return {};
    });
};
