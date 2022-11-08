/**
 *
 * @param {*} dataF data del formulario
 * @param {*} dataS data del servicio
 * @returns datos completos teniendo encuenta los que cambiaron
 */
const GetDataChanged = (dataF, dataS) => {
  const keys = Object.keys(dataF);
  const newData = {};
  keys.forEach((v) => {
    if (dataF[v] !== '' && typeof dataF[v] === 'string') {
      newData[v] = dataF[v];
    } else {
      newData[v] = dataS[v];
    }
  });

  return newData;
};

export default GetDataChanged;
