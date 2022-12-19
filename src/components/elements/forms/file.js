import React, { useRef } from 'react';
// import {Button} from 'reactstrap';
// import styles from './mystyle.module.css';

const File = ({ setFile, extensions }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      {/* <Button className = {styles.btnPrimary} onClick={handleClick}>
        cargar archivo
      </Button> */}

      <a href={handleClick} onClick={handleClick}>
        <div className="rounded-circle m-3 align-self-center list-thumbnail-letters small">
          <div className="glyph">
            <div className="glyph-icon simple-icon-cloud-upload">
              <></>
            </div>
          </div>
        </div>
      </a>

      <input
        ref={hiddenFileInput}
        type="file"
        accept={extensions}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default File;
