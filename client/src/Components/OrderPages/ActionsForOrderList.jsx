import { Delete } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

function ActionsForOrderList({
  params, handleSubmit,
}) {
  return (
    <Box sx={{ m: 1, position: 'relative' }}>
      <Fab
        color="primary"
        sx={{
          width: 40,
          height: 40,
          bgcolor: grey[500],
          '&:hover': { bgcolor: grey[700] },
        }}
        onClick={() => handleSubmit(params)}
      >
        <Delete />
      </Fab>
    </Box>
  );
}

export default ActionsForOrderList;
