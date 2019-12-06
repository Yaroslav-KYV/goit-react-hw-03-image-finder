import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../ImageGalleryItem';
import StyledList from './ImageGallery.styled';

const Gallery = ({ items, onImgClick }) => {
  return (
    <StyledList>
      <GalleryItem items={items} onImgClick={onImgClick} />
    </StyledList>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default Gallery;
