import React, { useState } from 'react';
import configure from '../../../components/cruds/configuration/usuario.configure';
import listarUsuarios from '../../../services/usuarios';
import getData from '../../../components/cruds/arrangeData';
import Table from '../../../components/elements/crud/table';

const Usuarios = ({ match }) => {
  const [data, setData] = useState({});
  const newData = getData(setData, listarUsuarios, data, configure.accessor);

  return (
    <>
      {newData && (
        <Table
          headers={configure.headers}
          accessor={configure.accessor}
          size={configure.size}
          data={newData}
          actions={configure.actions}
          setCreate={configure.setCreate}
          formCreate={configure.formCreate}
          name={configure.name}
          match={match}
        />
      )}
    </>
  );
};

export default Usuarios;
