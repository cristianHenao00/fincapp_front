import React, { useEffect, useState } from 'react';
import configure from '../../../components/cruds/configuration/users.configure';
import { getUsers } from '../../../services/users';
import ConfigureAction from '../../../components/cruds/configureAction';
import Table from '../../../components/elements/crud/table';
import { handlerGetData } from '../../../components/elements/crud/handlerServices';

const Users = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = async () => {
    const newData = await handlerGetData(getUsers, 'Listando usuarios');
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

export default Users;
