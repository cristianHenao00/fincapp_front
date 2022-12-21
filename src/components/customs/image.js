import React from 'react';

const ImageCard = ({ path, cell }) => {
  return (
    <img
      alt={cell.name}
      src={cell.image ? `${path}/${cell.image}` : `${path}/product.jpg`}
      className="list-thumbnail responsive border-0 card-img-left"
    />
  );
};

export default ImageCard;
