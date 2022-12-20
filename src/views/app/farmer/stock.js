import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/stock.configure';
import { getStocksFarmer } from 'services/stocks';
import Table from 'components/elements/crud/table';
import ConfigureAction from 'components/cruds/configureAction';
import { getCurrentUser } from 'helpers/Utils';
import { handlerGetData } from 'components/elements/crud/handlerServices';

const idCurrentUser = getCurrentUser().id;

const Stock = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = async () => {
    const newData = await handlerGetData(
      getStocksFarmer,
      'Listando producción',
      true,
      { id: idCurrentUser }
    );
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
export default Stock;
