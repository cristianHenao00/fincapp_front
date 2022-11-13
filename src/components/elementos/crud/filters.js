import React from 'react';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  const limpiar = () => {
    setFilter('');
  };

  return (
    <>
      <div className="form-group">
        <input
          className="form-control"
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value)}
          onFocus={limpiar}
        />
      </div>
    </>
  );
};

export default ColumnFilter;
