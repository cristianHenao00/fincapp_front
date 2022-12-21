/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/farmsUsers.configure';
import { handlerGetData } from 'components/elements/crud/handlerServices';
import { getFarmsUsers } from 'services/farms';
import ListView from 'components/elements/crud/listView';
import ConfigureComponents from 'components/cruds/configureComponents';

const Home = ({ match }) => {
  const [data, setData] = useState([]);

  const component = ConfigureComponents(configure);

  const listFunction = async () => {
    const newData = await handlerGetData(getFarmsUsers, '', false);
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
        component={component}
        headers={configure.headers}
        name={configure.name}
        match={match}
      />
    </>
  );
};

export default Home;
