import { Typography } from '@mui/material';
import React from 'react';

function Output({ total }) {
  return (
    <output
      id="output"
      name="total"
      value={total}
      style={{
        position: 'relative', color: 'black', top: -40, left: 10,
      }}
    >
      <Typography
        variant="h6"
        htmlFor="output"
      >
        Сумма:
        {' '}
        {total}
        {' '}
        ₽
      </Typography>
    </output>
  );
}
export default Output;
