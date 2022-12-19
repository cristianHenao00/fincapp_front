import React, { useEffect, useState } from 'react';
import configure from '../../../components/cruds/configuration/farms.configure';
import { getFarms } from '../../../services/farms';
import Table from '../../../components/elements/crud/table';
import ConfigureAction from '../../../components/cruds/configureAction';

const Category = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = () => {
    getFarms()
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
export default Category;
