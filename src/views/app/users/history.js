/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/orderHistory.configure';
import { handlerGetData } from 'components/elements/crud/handlerServices';
import { getHistoryOrder } from 'services/orders';
import ListView from 'components/elements/crud/listView';
import ConfigureComponents from 'components/cruds/configureComponents';
import { getCurrentUser } from 'helpers/Utils';

const idCurrentUser = getCurrentUser().id;

const myHistory = [
  {
    farm_name: 'Finquita 1',
    total: 100000,
    state: 1,
    date: new Date().toISOString(),
    rating: 0,
  },
  {
    farm_name: 'Finquita 2',
    total: 100000,
    state: 1,
    date: new Date().toISOString(),
    rating: 0,
  },
  {
    farm_name: 'Finquita 3',
    total: 300000,
    state: 1,
    date: new Date().toISOString(),
    rating: 0,
  },
];

const History = ({ match }) => {
  const [data, setData] = useState([]);

  const component = ConfigureComponents(configure);

  const listFunction = async () => {
    const newData = await handlerGetData(
      getHistoryOrder,
      'Listando productos',
      false,
      { id: idCurrentUser }
    );
    console.log(newData);
    setData(myHistory);
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
export default History;
