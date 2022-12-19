import React, { useState, useEffect } from 'react';
import { FormGroup, Col } from 'reactstrap';
import File from './file';

const FileComplete = ({
  name,
  register,
  setValue,
  size,
  title,
  extensions,
}) => {
  const [file, setFile] = useState(null);
  useEffect(() => setValue(name, file));

  return (
    <>
      <Col xs={size}>
        <FormGroup>
          {/* {title === undefined && <h5>{name.charAt(0).toUpperCase() + name.slice(1)}</h5>}
                {title !== undefined && <h5>{title.charAt(0).toUpperCase() + title.slice(1)}</h5>} */}

          <div
            style={{ backgroundColor: '#E3E1E1', borderRadius: '10px' }}
            className="card d-flex flex-row"
          >
            <File setFile={setFile} extensions={extensions} />
            <input type="hidden" id={name} {...register(name)} />
            <div
              style={{ backgroundColor: '#E3E1E1', borderRadius: '10px' }}
              className=" d-flex flex-grow-1 min-width-zero"
            >
              <div className="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div className="min-width-zero">
                  {!file && (
                    <p className="list-item-heading mb-1 truncate">{`Seleccione una ${title}`}</p>
                  )}
                  {(file?.type === 'image/png' ||
                    file?.type === 'image/jpeg' ||
                    file?.type === 'image/jpg') && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="imagen"
                      style={{
                        width: '150px',
                      }}
                    />
                  )}
                  <p className="list-item-absolute mb-1 truncate">
                    {file?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FormGroup>
      </Col>
    </>
  );
};
export default FileComplete;
