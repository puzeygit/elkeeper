import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTableStatus } from '../../redux/slices/tableSlice';

export default function ReserveButton({
  children, table, handleClick, setShowSnack, showSnack, setDisableBtn, disableBtn,
}) {
  const ResStyledButton = styled(Button)({
    fontSize: '15px',
    display: 'block',
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 15,
    color: 'white',
    width: 100,
    '&:hover': {
      backgroundColor: 'red',
    },
  });
  const dispatch = useDispatch();
  return (
    <ResStyledButton
      variant="contained"
      sx={{ backgroundColor: table.status ? 'green' : 'red' }}
      onClick={() => {
        dispatch(changeTableStatus(table.id, !table.status));
        handleClick();
        setShowSnack(!showSnack);
        setDisableBtn(!disableBtn);
      }}
    >
      {children}

    </ResStyledButton>
  );
}
