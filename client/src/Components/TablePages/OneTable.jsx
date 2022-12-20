import { Grid } from '@mui/material';
import React, { useState } from 'react';
import OrderList from '../OrderPages/OrderList';
import PurchaseGrid from '../OrderPages/PurchaseGrid';

export default function OneTable() {
  const [flag, setFlag] = useState(true);
  const [category, setCategory] = useState('');

  const clickHandler = (data) => {
    if (flag) {
      setFlag((prev) => !prev);
      setCategory(data.title);
    } else {
      setFlag((prev) => !prev);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <OrderList clickHandler={clickHandler} />
      </Grid>
      <Grid item xs={6}>
        <PurchaseGrid clickHandler={clickHandler} flag={flag} setFlag={setFlag} category={category} />
      </Grid>
    </Grid>
  );
}
