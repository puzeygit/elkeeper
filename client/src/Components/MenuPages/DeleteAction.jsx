import { Check } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Fab } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTable } from '../../redux/slices/menuSlice';

function DeleteAction({ params }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
    setTimeout(() => {
      dispatch(deleteTable(params.id));
    }, 2500);
  };
  return (
    <Box sx={{ m: 1, position: 'relative' }}>
      {
      success ? (
        <Fab
          color="green"
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'green',
            '&:hover': { bgcolor: 'green' },
            zIndex: 1,
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="#f44336"
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'transparent',
            '&:hover': { bgcolor: '#b71c1c' },
            zIndex: 1,
          }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </Fab>
      )
    }
      { loading && (
      <CircularProgress
        sx={{
          color: '#d50000',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
        }}
      />
      )}
    </Box>
  );
}
export default DeleteAction;
