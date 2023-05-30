import React from 'react';
import Button from '@mui/material/Button';
import './button-default.css'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  text: string;
}

const ButtonDefault: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <Button 
        variant='contained'
        className="button-default"
        endIcon={
          <ArrowForwardIcon className='button-icon' />}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonDefault;
