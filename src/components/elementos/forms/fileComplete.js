import React, { useState, useEffect } from 'react';
import { Colxx } from 'components/common/CustomBootstrap';
import { FormGroup } from 'reactstrap';
import File from './file';

const FileComplete = ({ name, register, setValue, size, title }) => {
  const [file, setFile] = useState({});
  useEffect(() => setValue(name, file));

  return (
    <>
      <Colxx xxs={size}>
        <FormGroup>
          {/* {title === undefined && <h5>{name.charAt(0).toUpperCase() + name.slice(1)}</h5>}
                {title !== undefined && <h5>{title.charAt(0).toUpperCase() + title.slice(1)}</h5>} */}

          <div
            style={{ backgroundColor: '#E3E1E1', borderRadius: '10px' }}
            className="card d-flex flex-row"
          >
            <File setFile={setFile} />
            <input type="hidden" id={name} {...register(name)} />
            <div
              style={{ backgroundColor: '#E3E1E1', borderRadius: '10px' }}
              className=" d-flex flex-grow-1 min-width-zero"
            >
              <div className="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">
                  <p className="list-item-heading mb-1 truncate">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </FormGroup>
      </Colxx>
    </>
  );
};
export default FileComplete;
