/* eslint-disable */
import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import { Card, CardBody, CardTitle, Row, Button } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import DatatablePagination from 'components/DatatablePagination';
import ColumnFilter from './filters';
import ButtonMF from 'components/elements/forms/buttonMF';
import './styles.css';
import Breadcrumb from 'containers/navs/Breadcrumb';

/**
 * @param {headers} lista con la cabecera de la tabla
 * @param  {accessor} lista como se representa en BD
 * @param  {size} lista con los tamaños de cada columna
 * @param  {data} contenido a mostrar
 * @param  {modal} configuracion del
 * @returns  la tabla con filtros
 */
function Table({
  headers,
  accessor,
  size,
  data,
  actions,
  setCreate,
  formCreate,
  filter = [],
  listFunction,
  name = '',
  match = { path: '' },
}) {
  const arrayMemo = [];

  accessor.forEach((v, i) => {
    if (!accessor[i]) {
      arrayMemo.push({
        Header: headers[i],
        cellClass: `text-muted w-${size[i]}`,
        Cell: function renderCell(cell) {
          return actions(cell.data[cell.row.index], listFunction);
        },
      });
    } else if (accessor[i] === 'visibility') {
      arrayMemo.push({
        Header: headers[i],
        cellClass: `text-muted w-${size[i]}`,
        Cell: function renderCell(cell) {
          return (
            <h6>
              {cell.data[cell.row.index]['visibility'] ? 'Activo' : 'Inactivo'}
            </h6>
          );
        },
        sortType: 'basic',
        Filter: ColumnFilter,
      });
    } else {
      arrayMemo.push({
        Header: headers[i],
        accessor: accessor[i],
        cellClass: `text-muted w-${size[i]}`,
        sortType: 'basic',
        Filter: ColumnFilter,
      });
    }
  });

  const cols = useMemo(() => arrayMemo, []);

  const {
    setAllFilters, // variable para limpiar filters
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
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  // handler de limpiza
  const handlerClean = () => setAllFilters([]);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading={name} match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {/** Filtros */}
      <Card className="mb-6">
        <div className="card-body">
          <CardTitle>
            <h3>
              <strong>Filtros</strong>
            </h3>
          </CardTitle>
          <Row className="mb-2">
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column) => {
                let filterComponent = <></>;

                if (filter.length === 0) {
                  filterComponent = (
                    <>
                      <Colxx xxs="3">
                        <div>
                          {column.canFilter ? column.render('Header') : null}
                        </div>
                        <div>
                          {column.canFilter ? column.render('Filter') : null}
                        </div>
                      </Colxx>
                    </>
                  );
                } else if (filter.includes(column.Header)) {
                  filterComponent = (
                    <>
                      <Colxx xxs="3">
                        <div>
                          {column.canFilter ? column.render('Header') : null}
                        </div>
                        <div>
                          {column.canFilter ? column.render('Filter') : null}
                        </div>
                      </Colxx>
                    </>
                  );
                }

                return filterComponent;
              })
            )}
          </Row>

          <ButtonMF
            listFunction={listFunction}
            set={setCreate}
            form={formCreate}
            origen="inside"
          />

          <Button onClick={handlerClean} className="ml-3">
            Limpiar
          </Button>
        </div>
      </Card>
      <hr />
      {/** Tabla */}
      {data.length !== 0 && (
        <Card className="mt-6">
          <CardBody>
            <table {...getTableProps()} className="r-table table table-striped">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, columnIndex) => (
                      <th
                        key={`th_${columnIndex}`}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
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
                    <tr>
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
      )}
    </>
  );
}

export default Table;
