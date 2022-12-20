import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import UndoIcon from '@mui/icons-material/Undo';

export default function BackButton({ flag, setFlag }) {
  const BackStyledButton = styled(Button)({
    height: 120,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADAF32',
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
    '&:hover': {
      backgroundColor: '#7FB82F',
    },
  });

  const backButtonHandler = () => {
    if (flag === false) {
      setFlag((prev) => !prev);
    }
  };
  return (
    <BackStyledButton onClick={() => {
      backButtonHandler();
    }}
    >
      <div>
        <UndoIcon sx={{ color: 'black' }} />
        <Typography component="h6" variant="h6">
          Назад
        </Typography>
      </div>
    </BackStyledButton>
  );
}
