/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ConfigureAction from 'components/cruds/configureAction';
import configure from 'components/cruds/configuration/module.configure';
import Table from 'components/elements/crud/table';
import { getModules } from 'services/modules';
import { handlerGetData } from 'components/elements/crud/handlerServices';

const Module = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = async () => {
    const newData = await handlerGetData(getModules, 'Listando modulos');
    setData(newData);
  };

  useEffect(() => {
    listFunction();
  }, []);

  return (
    <>
      <Table
        headers={configure.headers}
        accessor={configure.accessor}
        size={configure.size}
        data={data}
        actions={actions}
        setCreate={configure.setCreate}
        listFunction={listFunction}
        formCreate={menu.create_action ? configure.formCreate : null}
        name={configure.name}
        match={match}
      />
    </>
  );
};
export default Module;
