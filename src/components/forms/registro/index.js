import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormGroup, Label, Button, Form, Row } from 'reactstrap';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx } from '../../common/CustomBootstrap';

import listarDepartamentos, {
  listarMunicipios,
} from '../../../services/ubicacion';
import Registro from '../../../services/registro';

const FormularioUsuario = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  const onChangeDepartamento = (event) => {
    listarMunicipios(event.target.value).then((response) =>
      setMunicipios(response.data)
    );
  };

  useEffect(() => {
    listarDepartamentos().then((response) => setDepartamentos(response.data));
  }, []);

  const onSubmit = (data) => {
    Registro(data)
      .then((response) => console.log(response.data))
      .catch((response) => console.log(response.data));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Colxx xxs="6" className="nombre">
            <FormGroup>
              <Label for="nombre">
                <IntlMessages id="Nombre" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                {...register('nombre', { required: true, maxLength: 50 })}
              />
              {errors.nombre?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El nombre es requerido
                </div>
              )}
              {errors.nombre?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El nombre debe contener máximo 50 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="apellido">
                <IntlMessages id="Apellido" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                {...register('apellido', { required: true, maxLength: 50 })}
              />
              {errors.apellido?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El apellido es requerido
                </div>
              )}
              {errors.apellido?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El apellido debe contener máximo 50 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="tipoDocumento">
                <IntlMessages id="Tipo documento" />
              </Label>
              <select
                type="text"
                className="form-control"
                id="tipoDocumento"
                {...register('tipoDocumento', { required: true })}
              >
                <option value="">Seleccione uno</option>
                <option value="TI">Tarjeta identidad</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
              </select>
              {errors.tipoDocumento?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El tipo de documento es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="documento">
                <IntlMessages id="Documento" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="documento"
                {...register('documento', { required: true, maxLength: 15 })}
              />
              {errors.documento?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El documento es requerido
                </div>
              )}
              {errors.documento?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El documento debe contener máximo 15 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="genero">
                <IntlMessages id="Género" />
              </Label>
              <select
                type="text"
                className="form-control"
                id="genero"
                {...register('genero', { required: true })}
              >
                <option value="">Seleccione uno</option>
                <option value="fem">Femenino</option>
                <option value="mas">Masculino</option>
              </select>
              {errors.genero?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El género es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="fechaNacimiento">
                <IntlMessages id="Fecha de nacimiento" />
              </Label>
              <input
                type="date"
                className="form-control"
                id="fechaNacimiento"
                {...register('fechaNacimiento', { required: true })}
              />
              {errors.fechaNacimiento?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  La fecha de nacimiento es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="departamento">
                <IntlMessages id="Departamento" />
              </Label>
              <select
                type="text"
                className="form-control"
                id="idDepartamento"
                onChangeCapture={onChangeDepartamento}
                {...register('idDepartamento', { required: true })}
              >
                <option value="">Seleccione uno</option>
                {departamentos.map((d) => (
                  <option key={d.id_departamento} value={d.id_departamento}>
                    {d.departamento}
                  </option>
                ))}
              </select>
              {errors.idDepartamento?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El departamento es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="municipio">
                <IntlMessages id="Municipio" />
              </Label>
              <select
                type="text"
                className="form-control"
                id="idMunicipio"
                {...register('idMunicipio', { required: true })}
              >
                <option value="">Seleccione uno</option>
                {municipios.map((m) => (
                  <option key={m.id_municipio} value={m.id_municipio}>
                    {m.municipio}
                  </option>
                ))}
              </select>
              {errors.idMunicipio?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El municipio es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="direccion">
                <IntlMessages id="Dirección" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                {...register('direccion', { required: true, maxLength: 60 })}
              />
              {errors.direccion?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  La dirección es requerida
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="telefono">
                <IntlMessages id="Teléfono" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                {...register('telefono', { maxLength: 20 })}
              />
            </FormGroup>
          </Colxx>

          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="celular">
                <IntlMessages id="Celular" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="celular"
                {...register('celular', { required: true, maxLength: 20 })}
              />
              {errors.celular?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El celular es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="username">
                <IntlMessages id="Correo electrónico" />
              </Label>
              <input
                type="text"
                className="form-control"
                id="username"
                {...register('username', {
                  required: true,
                  maxLength: 60,
                  pattern:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                })}
              />
              {errors.username?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El correo electrónico es requerido
                </div>
              )}
              {errors.username?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El correo electrónico debe contener máximo 60 caractéres
                </div>
              )}
              {errors.username?.type === 'pattern' && (
                <div className="invalid-feedback d-block">
                  El usuario debe ser correo electónico
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="password">
                <IntlMessages id="Contraseña" />
              </Label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register('password', {
                  required: true,
                  minLength: 8,
                  maxLength: 10,
                  pattern:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                })}
              />
              {errors.password?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  La contraseña es requerida
                </div>
              )}
              {errors.password?.type === 'minLength' && (
                <div className="invalid-feedback d-block">
                  La contraseña debe contener mínimo 8 caractéres
                </div>
              )}
              {errors.password?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  La contraseña debe contener máximo 10 caractéres
                </div>
              )}
              {errors.password?.type === 'pattern' && (
                <div className="invalid-feedback d-block">
                  La contraseña debe contener letras mayúsculas y minúsculas,
                  números y al menos un carácter especial
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="passwordConfirm">
                <IntlMessages id="Confirmar contraseña" />
              </Label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register('passwordConfirm', {
                  required: true,
                  validate: (value) => value === getValues('password'),
                })}
              />
              {errors.passwordConfirm?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El confirmar contraseña es requerido
                </div>
              )}
              {errors.passwordConfirm?.type === 'validate' && (
                <div className="invalid-feedback d-block">
                  Las contraseñas no coinciden
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Button color="success">
          <IntlMessages id="Registrar" />
        </Button>
      </Form>
    </>
  );
};

export default FormularioUsuario;
