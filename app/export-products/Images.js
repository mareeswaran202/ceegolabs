import React from 'react';
import PropTypes from 'prop-types';

const Images = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className='images-container'>
      {data.map((image, index) => (
        <div key={index} className='image'>
          <img src={image.src} alt={image.title} onClick={() => handleClickImage(index)} />
          <p>{image.title}</p>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

Images.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Images;
