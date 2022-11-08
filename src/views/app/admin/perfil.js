import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import createNotification from '../../../components/notificaciones/flotantes';
import ColumnFilter from '../../../components/tablaDatosGeneral/filtros/tablaFiltros';
import Tabla from '../../../components/tablaDatosGeneral/tablaPerfiles';
import { listarPerfil } from '../../../services/perfil';
import Accion from '../../../components/tablaDatosGeneral/acciones/perfil/perfil';

const Perfil = ({ match, menu }) => {
  console.log('menu de perfil', menu);
  const [perfiles, setPerfiles] = useState([]);

  const funcionListar = () => {
    listarPerfil()
      .then((response) => {
        setPerfiles(response.data);
      })
      .catch(() =>
        createNotification(
          'error',
          'Error',
          `Error al consutar los perfiles`,
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
        Header: 'Nombre',
        accessor: 'nombre',
        cellClass: 'text-muted w-15',
        sortType: 'basic',
        Filter: ColumnFilter,
      },
      {
        Header: 'Descripcion',
        accessor: 'descripcion',
        cellClass: 'text-muted w-15',
        sortType: 'basic',
        Filter: ColumnFilter,
      },
      {
        Header: 'Fecha de creación',
        accessor: 'fechaCreacion',
        cellClass: 'text-muted w-15',
        sortType: 'basic',
        Filter: ColumnFilter,
      },
      {
        Header: 'Acciones',
        cellClass: 'text-muted w-20',
        Cell: function renderCell(cell) {
          return (
            <Accion cell={cell} titulo="perfil" funcionListar={funcionListar} />
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
          <Breadcrumb heading="Perfiles" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Tabla
            cols={cols}
            tituloModal="Crear perfiles"
            data={perfiles}
            titulo="Listado de perfiles"
            funcionListar={funcionListar}
          />
        </Colxx>
      </Row>
    </>
  );
};
export default Perfil;
