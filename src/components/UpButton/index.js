import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import UpBtn from './UpButton';

const UpButton = () => (
  <UpBtn
    type="button"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }}
  >
    <ArrowUpwardIcon />
  </UpBtn>
);

export default UpButton;
