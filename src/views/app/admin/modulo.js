import React, { useState } from 'react';
import ConfigureAction from '../../../components/cruds/configureAction';
import getData from '../../../components/cruds/arrangeData';
import configure from '../../../components/cruds/modulo/configure';
import Table from '../../../components/elementos/crud/table';
import { listarModulos } from '../../../services/modulos';

/**
 * @returns  Una vista donde se presenta la tabla con su CRUD
 */
const Modulo = ({ menu }) => {
  console.log('menu de modulo', menu);
  const [data, setData] = useState({});
  const newData = getData(setData, listarModulos, data, configure.accessor);

  const actions = ConfigureAction(configure, menu);

  return (
    <>
      <Table
        headers={configure.headers}
        accessor={configure.accessor}
        size={configure.size}
        data={newData}
        actions={actions}
        setCreate={configure.setCreate}
        formCreate={menu.accionCrear ? configure.formCreate : null}
      />
    </>
  );
};
export default Modulo;
