import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addReceiptItemAsync } from '../../redux/slices/receiptSlice';

export default function TableButton({ children, table, disableBtn }) {
  const dispatch = useDispatch();
  const StyledButton = styled(Button)({
    height: 200,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'wheat',
    '&:hover': {
      backgroundColor: '#997647',
    },
  });
  console.log('disabledBtn ===>', disableBtn);
  return (
    <StyledButton disabled={disableBtn} onClick={() => dispatch(addReceiptItemAsync(table?.id))}>
      {children}
    </StyledButton>
  );
}
