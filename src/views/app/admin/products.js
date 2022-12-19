/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ConfigureAction from '../../../components/cruds/configureAction';
import configure from '../../../components/cruds/configuration/products.configure';
import Table from '../../../components/elements/crud/table';
import { getProductsFarmer } from '../../../services/products';
import { handlerGetData } from '../../../components/elements/crud/handlerServices';
import { getCurrentUser } from '../../../helpers/Utils';

const idCurrentUser = getCurrentUser().id;

const Product = ({ match, menu }) => {
  const [data, setData] = useState([]);

  const actions = ConfigureAction(configure, menu);

  const listFunction = async () => {
    const newData = await handlerGetData(
      getProductsFarmer,
      'Listando productos',
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
export default Product;
