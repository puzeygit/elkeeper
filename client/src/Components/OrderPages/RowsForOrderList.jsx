import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CloseCheckButton from './CloseCheckButton';
import Output from './Output';

function RowsForOrderList({
  rows, columns, rowId, setRowId,
}) {
  const [pageS, setPageSize] = useState(10);
  const order = useSelector((state) => state.order);
  const sum = order.reduce((acc, item) => {
    acc += parseFloat((item.price).toFixed(2));
    return acc;
  }, Number(0));

  return (
    <>
      <Box style={{ height: '400px', width: '100%' }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: 'center', mb: 3, color: 'white',
          }}
        >
          Управление заказом
        </Typography>
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={pageS}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          sx={{
            backgroundColor: 'white',
          }}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
        <Output total={sum.toFixed(2)} />
      </Box>
      <CloseCheckButton total={sum} />
    </>
  );
}

export default RowsForOrderList;
