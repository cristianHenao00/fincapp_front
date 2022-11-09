/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormGroup, Label, Button, Form, Row } from 'reactstrap';

import { Colxx } from '../../common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';

import listarDepartamentos, {
  listarMunicipios,
} from '../../../services/ubicacion';
import {
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
} from '../../../services/usuarios';

import createNotification from '../../notificaciones/flotantes';

import { listarPerfil } from '../../../services/perfil';

const FormularioUsuario = ({ cell, accion, funcionCerrar, funcionListar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [perfiles, setPerfiles] = useState([]);

  const onChangeDepartamento = (event) => {
    listarMunicipios(event.target.value).then((response) =>
      setMunicipios(response.data)
    );
  };

  useEffect(() => {
    listarPerfil().then((response) => {
      setPerfiles(response.data);
    });
    listarDepartamentos().then((response) => setDepartamentos(response.data));
    if (accion === 'actualizar' || accion === 'ver') {
      obtenerUsuario(cell.data[cell.row.index].id)
        .then((response) => {
          const { data } = response;
          listarMunicipios(response.data.informacionUsuario.idDepartamento)
            .then((responseMunicipios) => {
              setMunicipios(responseMunicipios.data);
              data.informacionUsuario.fechaNacimiento = `${
                data.informacionUsuario.fechaNacimiento[0]
              }-${data.informacionUsuario.fechaNacimiento[1] < 10 ? 0 : ''}${
                data.informacionUsuario.fechaNacimiento[1]
              }-${data.informacionUsuario.fechaNacimiento < 10 ? 0 : ''}${
                data.informacionUsuario.fechaNacimiento[2]
              }`;

              reset(data);
            })
            .catch((responseMunicipios) => {
              console.log(responseMunicipios);
              reset(response.data);
            });
        })
        .catch((response) => console.log(response));
    }
  }, []);

  const onSubmit = (data) => {
    if (accion === 'crear') {
      crearUsuario(data)
        .then((response) => {
          createNotification(
            'success',
            'Creación exitosa',
            `Se ha creado el usuario ${response.data.username}`,
            'filled'
          );
          funcionListar();
        })
        .catch(() =>
          createNotification(
            'error',
            'Error',
            `Error al crear usuario`,
            'filled'
          )
        );
    } else if (accion === 'actualizar') {
      actualizarUsuario(cell.data[cell.row.index].id, data)
        .then((response) => {
          createNotification(
            'success',
            'Actualización exitosa',
            `Se ha actualizado el usuario ${response.data.username}`,
            'filled'
          );
          funcionListar();
        })
        .catch(() =>
          createNotification(
            'error',
            'Error',
            `Error al actualizar usuario`,
            'filled'
          )
        );
    }
    funcionCerrar();
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Colxx xxs="6" className="nombre">
            <FormGroup>
              <Label for="nombreCompleto">Nombre Completo</Label>
              <input
                type="text"
                className="form-control"
                id="informacionUsuario.nombreCompleto"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.nombreCompleto', {
                  required: true,
                  maxLength: 30,
                })}
              />
              {errors.informacionUsuario?.nombreCompleto?.type ===
                'required' && (
                <div className="invalid-feedback d-block">
                  El nombre es requerido
                </div>
              )}
              {errors.informacionUsuario?.nombreCompleto?.type ===
                'maxLength' && (
                <div className="invalid-feedback d-block">
                  El nombre debe contener máximo 30 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="nombreusuario">Correo electrónico</Label>
              <input
                type="text"
                className="form-control"
                id="correo"
                disabled={accion === 'ver'}
                {...register('nombreusuario', {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                })}
              />
              {errors.nombreusuario?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El corro eléctronico es requerido
                </div>
              )}
              {errors.nombreusuario?.type === 'maxLength' && (
                <div className="invalid-feedback d-block">
                  El corro eléctronico debe contener máximo 30 caractéres
                </div>
              )}
              {errors.nombreusuario?.type === 'pattern' && (
                <div className="invalid-feedback d-block">
                  El corro eléctronico debe ser correo electónico
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.tipoDocumento">
                <IntlMessages id="Tipo documento" />
              </Label>
              <select
                type="text"
                className="form-control"
                id="informacionUsuario.tipoDocumento"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.tipoDocumento')}
              >
                <option value="">Seleccione uno</option>
                <option value="TI">Tarjeta identidad</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
              </select>
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.numeroDocumento">
                Número de documento
              </Label>
              <input
                type="text"
                className="form-control"
                id="informacionUsuario.numeroDocumento"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.numeroDocumento', {
                  required: true,
                  maxLength: 12,
                })}
              />
              {errors.informacionUsuario?.numeroDocumento?.type ===
                'required' && (
                <div className="invalid-feedback d-block">
                  El documento es requerido
                </div>
              )}
              {errors.informacionUsuario?.numeroDocumento?.type ===
                'maxLength' && (
                <div className="invalid-feedback d-block">
                  El documento debe contener máximo 12 caractéres
                </div>
              )}
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.genero">Género</Label>
              <select
                type="text"
                className="form-control"
                id="informacionUsuario.genero"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.genero')}
              >
                <option value="">Seleccione uno</option>
                <option value="fem">Femenino</option>
                <option value="mas">Masculino</option>
              </select>
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.fechaNacimiento">
                Fecha de nacimiento
              </Label>
              <input
                type="date"
                className="form-control"
                id="fechaNacimiento"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.fechaNacimiento')}
              />
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="idDepartamento">Departamento</Label>
              <select
                type="text"
                className="form-control"
                id="informacionUsuario.idDepartamento"
                disabled={accion === 'ver'}
                onChangeCapture={onChangeDepartamento}
                {...register('informacionUsuario.idDepartamento')}
              >
                <option value="">Seleccione uno</option>
                {departamentos.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.nombre}
                  </option>
                ))}
              </select>
            </FormGroup>
          </Colxx>

          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.idCiudad">Municipio</Label>
              <select
                type="text"
                className="form-control"
                id="informacionUsuario.idCiudad"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.idCiudad')}
              >
                <option value="">Seleccione uno</option>
                {municipios.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nombre}
                  </option>
                ))}
              </select>
            </FormGroup>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.direccion">Dirección</Label>
              <input
                type="text"
                className="form-control"
                id="informacionUsuario.direccion"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.direccion')}
              />
            </FormGroup>
          </Colxx>

          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.telefono">Teléfono</Label>
              <input
                type="text"
                className="form-control"
                id="informacionUsuario.telefono"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.telefono')}
              />
            </FormGroup>
          </Colxx>

          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="informacionUsuario.celular">Celular</Label>
              <input
                type="text"
                className="form-control"
                id="informacionUsuario.celular"
                disabled={accion === 'ver'}
                {...register('informacionUsuario.celular')}
              />
            </FormGroup>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="idPerfil">Perfil</Label>
              <select
                className="form-control"
                id="idPerfil"
                disabled={accion === 'ver'}
                {...register('idPerfil', { required: true })}
              >
                <option value="">Seleccione uno</option>
                {perfiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>
              {errors.idPerfil?.type === 'required' && (
                <div className="invalid-feedback d-block">
                  El perfil es requerido
                </div>
              )}
            </FormGroup>
          </Colxx>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="contrasena">Contraseña</Label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                disabled={accion === 'ver'}
                {...register('contrasena')}
              />
            </FormGroup>
          </Colxx>
        </Row>
        {accion !== 'ver' && (
          <Button color="success">
            <IntlMessages id="Guardar" />
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormularioUsuario;
