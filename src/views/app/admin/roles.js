import React, { useState } from 'react';
import configure from '../../../components/cruds/configuration/menu.configure';
import listarMenus from '../../../services/menu';
import getData from '../../../components/cruds/arrangeData';
import Table from '../../../components/elements/crud/table';

const Menu = ({ match }) => {
  const [data, setData] = useState({});
  const newData = getData(setData, listarMenus, data, configure.accessor);

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
export default Menu;
