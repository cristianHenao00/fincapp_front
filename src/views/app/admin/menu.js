import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/menu.configure';
import { getMenus } from 'services/menu';
import Table from 'components/elements/crud/table';
import ConfigureAction from 'components/cruds/configureAction';

const Menu = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = () => {
    getMenus()
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => console.log(response));
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
export default Menu;
