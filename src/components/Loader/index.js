import React from 'react';
import Loader from 'react-loader-spinner';
import StyledDiv from './Loader.styled';

const BallTriangle = () => {
  return (
    <StyledDiv>
      <Loader type="BallTriangle" color="#3f51b5" height={400} width={400} />
    </StyledDiv>
  );
};
export default BallTriangle;
