/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import configure from 'components/cruds/configuration/productFarms.configure';
import { handlerGetData } from 'components/elements/crud/handlerServices';
import { getFarmProducts } from 'services/farms';
import ListView from 'components/elements/crud/listView';
import { useParams } from 'react-router-dom';
import ConfigureComponents from 'components/cruds/configureComponents';

const Farm = ({ match }) => {
  const { farm_id } = useParams();

  const [data, setData] = useState([]);

  const component = ConfigureComponents(configure);

  const listFunction = async () => {
    const newData = await handlerGetData(
      getFarmProducts,
      'Listando productos',
      false,
      { id: parseInt(farm_id, 10) }
    );
    console.log(newData);
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
export default Farm;
