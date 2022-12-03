import React, { useState } from 'react';
import configure from '../../../components/cruds/configuration/roles.configure';
import { getRoles } from '../../../services/roles';
import ConfigureAction from '../../../components/cruds/configureAction';
import getData from '../../../components/cruds/arrangeData';
import Table from '../../../components/elements/crud/table';

const Role = ({ match, menu }) => {
  const [data, setData] = useState({});
  const newData = getData(setData, getRoles, data, configure.accessor);
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
        formCreate={menu.create_action ? configure.formCreate : null}
        name={configure.name}
        match={match}
      />
    </>
  );
};
export default Role;
