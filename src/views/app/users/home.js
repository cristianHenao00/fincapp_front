/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/farmsUsers.configure';
import { handlerGetData } from 'components/elements/crud/handlerServices';
import { getFarmsUsers } from 'services/farms';
import ListView from 'components/elements/crud/listView';
import ConfigureAction from 'components/cruds/configureAction';

const Home = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = async () => {
    const newData = await handlerGetData(getFarmsUsers, 'Listando productos');
    setData(newData);
  };

  useEffect(() => {
    listFunction();
  }, []);

  return (
    <>
      <ListView
        accessor={configure.accessor}
        size={configure.size}
        data={data}
        actions={actions}
        name={configure.name}
        match={match}
      />
    </>
  );
};

export default Home;