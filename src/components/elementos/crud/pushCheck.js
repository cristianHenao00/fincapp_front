/** Trae toda la data que se necesita */
const handlerData = (setter, service, props) => {
  service(props).then((Response) => setter(Response.data));
};

/** Organiza los datos con las etiquetas del accessor */
const processing = (data, value, label) => {
  const newData = [];
  // verifico que la data este llena
  if (Object.keys(data).length !== 0) {
    // Por cada registro de la data hace
    data.forEach((row) => {
      // se extrae el value y el label del registro
      const array = {
        value: row[value],
        label: row[label],
      };
      newData.push(array);
    });
  }
  return newData;
};

/**
 * @param {*} service servicio que llamara a los datos
 * @param {*} value es el valor que representa el registro
 * @param {*} label es el nombre del registro
 * @param {*} data variable donde se almacenara los datos
 * @param {*} setData usestate que sirve para extraer los datos
 * @param {*} props complementar la peticion si se necesita
 *
 * @returns  Data organizada para usar en check
 */
const PushCheck = (service, value, label, data, setData, props = {}) => {
  if (Object.keys(data).length === 0) handlerData(setData, service, props);
  return processing(data, value, label, setData);
};

export default PushCheck;
