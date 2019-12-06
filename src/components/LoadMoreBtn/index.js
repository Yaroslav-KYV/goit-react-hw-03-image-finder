import React from 'react';
import PropTypes from 'prop-types';
import StyledBtn from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ onClick }) => (
  <StyledBtn type="button" onClick={onClick}>
    Load more
  </StyledBtn>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
