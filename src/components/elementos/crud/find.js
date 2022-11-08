/** Este elemento nos ayuda a sobre pasar la asincronia
 * sirve tanto para buscar UNO(1) como buscar todos(ALL)
 */
const Find = async (service, props, setter) => {
  await service(props).then((Response) => setter(Response.data));
};
export const FindAll = async (service, setter) => {
  await service().then((Response) => setter(Response.data));
};
export const FindAllR = async (service) => {
  let response;
  await service().then((Response) => {
    response = Response.data;
  });
  return response;
};
export const FindR = async (service, props) => {
  let response;
  await service(props).then((Response) => {
    response = Response.data;
  });
  return response;
};
export default Find;
