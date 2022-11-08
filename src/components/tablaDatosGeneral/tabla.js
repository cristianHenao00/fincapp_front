/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import { Card, CardBody, CardTitle, Row } from 'reactstrap'; //
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../common/CustomBootstrap';
import DatatablePagination from '../DatatablePagination';

import FormularioModal from '../modals/formularios/usuario';

function Table({
  cols,
  tituloModal,
  data,
  titulo,
  formulario,
  modalCerrado,
  funcionListar,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: cols,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <Card>
        <div className="card-body">
          <CardTitle>
            <h3>
              <strong>Filtros</strong>
            </h3>
          </CardTitle>

          <Row>
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column) => (
                <Colxx xxs="3">
                  <div>{column.canFilter ? column.render('Header') : null}</div>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </Colxx>
              ))
            )}
          </Row>
          <br />
          <FormularioModal
            titulo={tituloModal}
            formulario={formulario}
            modalCerrado={modalCerrado}
            funcionListar={funcionListar}
          />
        </div>
      </Card>
      <hr />
      <br />
      <Card className="mt-10">
        <CardBody>
          <CardTitle>
            <h3>
              <strong>{titulo}</strong>
            </h3>
          </CardTitle>
          <table {...getTableProps()} className="r-table table table-striped">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      key={`th_${columnIndex}`}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? 'sorted-desc'
                            : 'sorted-asc'
                          : ''
                      }
                    >
                      {column.render('Header')}
                      <span />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        key={`td_${cellIndex}`}
                        {...cell.getCellProps({
                          className: cell.column.cellClass,
                        })}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <DatatablePagination
            page={pageIndex}
            pages={pageCount}
            canPrevious={canPreviousPage}
            canNext={canNextPage}
            pageSizeOptions={[4, 10, 20, 30, 40, 50]}
            showPageSizeOptions={false}
            showPageJump={false}
            defaultPageSize={pageSize}
            onPageChange={(p) => gotoPage(p)}
            onPageSizeChange={(s) => setPageSize(s)}
            paginationMaxSize={pageCount}
          />
        </CardBody>
      </Card>
    </>
  );
}

export default Table;
