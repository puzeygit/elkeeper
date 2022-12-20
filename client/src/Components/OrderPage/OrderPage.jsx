import { Typography, Box } from '@mui/material';
import React from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import 'hammerjs';
import Donut from './Donut';

function OrderPage() {
  return (
    <Box sx={{ background: 'transparent' }}>
      <Typography component="h2" variant="h2">
        OrderPage
        <Donut />
      </Typography>
    </Box>
  );
}

export default OrderPage;
