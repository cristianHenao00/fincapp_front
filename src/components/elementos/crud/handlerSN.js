import createNotification from './flotantes';

/**
 *
 * @param {*} service el servicio a ejecutar
 * @param {*} props la informacion del servicio
 * @param {*} msgs el titulo de la notificacion
 */
const handlerSN = (service, props, msgs) => {
  service(props)
    .then(() => {
      createNotification('success', msgs, 'Operación exitosa', 'filled');
    })
    .catch(() => {
      createNotification('danger', msgs, 'Oops hubo un error', 'filled');
    });
};

export default handlerSN;
