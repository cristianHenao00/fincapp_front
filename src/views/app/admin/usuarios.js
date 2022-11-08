import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';

import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Tabla from '../../../components/tablaDatosGeneral/tabla';

import ColumnFilter from '../../../components/tablaDatosGeneral/filtros/tablaFiltros';

import listarUsuarios from '../../../services/usuarios';

import AccionUsuario from '../../../components/tablaDatosGeneral/acciones/usuario';

import createNotification from '../../../components/notificaciones/flotantes';

const Usuarios = ({ match }) => {
  const [usuarios, setUsuarios] = useState([]);

  const funcionListar = () => {
    listarUsuarios()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch(() =>
        createNotification(
          'error',
          'Error',
          `Error al consutar los usuarios`,
          'filled'
        )
      );
  };

  useEffect(() => {
    funcionListar();
  }, []);

  const cols = React.useMemo(
    () => [
      {
        Header: 'Nombre completo',
        accessor: 'informacionUsuario.nombreCompleto',
        cellClass: 'text-muted w-20',
        sortType: 'basic',
        Filter: ColumnFilter,
      },
      {
        Header: 'Dirección',
        accessor: 'informacionUsuario.direccion',
        cellClass: 'text-muted w-20',
        sortType: 'basic',
        Filter: ColumnFilter,
      },
      {
        Header: 'Correo electrónico',
        accessor: 'informacionUsuario.correo',
        cellClass: 'text-muted w-20',
        sortType: 'basic',
        Filter: ColumnFilter,
      },
      {
        Header: 'Acciones',
        cellClass: 'text-muted w-20',
        Cell: function renderCell(cell) {
          return (
            <AccionUsuario
              cell={cell}
              titulo="usuario"
              funcionListar={funcionListar}
            />
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Usuarios" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Tabla
            cols={cols}
            tituloModal="Crear usuario"
            data={usuarios}
            titulo="Listado de usuarios"
            funcionListar={funcionListar}
          />
        </Colxx>
      </Row>
    </>
  );
};

export default Usuarios;
