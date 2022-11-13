const handlerData = (setter, service, props) => {
  service(props).then((response) => setter(response.data));
};

/** Organiza los datos con las etiquetas del accessor */
const processing = (data, accessor) => {
  const newData = [];
  if (Object.keys(data).length !== 0) {
    data.forEach((row) => {
      const aux = {};
      accessor.forEach((ca) => {
        if (ca !== false) {
          if (typeof row[ca] === 'boolean') {
            if (row[ca]) {
              aux[ca] = 'Si';
            } else {
              aux[ca] = 'No';
            }
          } else {
            aux[ca] = row[ca];
          }
        }
      });
      newData.push(aux);
    });
  }
  return newData;
};
/**
 *
 * @param {*} setter usestate que sirve para extraer los datos
 * @param {*} service servicio que llamara a los datos
 * @param {*} data variable donde se almacenara los datos
 * @param {*} accessor unicas variables que se necesitan de la consulta
 * @param {*} props props del servicio como lo puede ser id o body
 * @returns  Data organizada
 */
const getData = (setter, service, data, accessor, props = {}) => {
  if (Object.keys(data).length === 0) {
    handlerData(setter, service, props);
  }

  return processing(data, accessor);
};

export default getData;
