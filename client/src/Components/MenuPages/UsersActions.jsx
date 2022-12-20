import { Box, CircularProgress, Fab } from '@mui/material';
import React, { useState } from 'react';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { editMenuItemAsync } from '../../redux/slices/menuSlice';

function UsersActions({ params, rowId, setRowId }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      const { id, status } = params.row;
      dispatch(editMenuItemAsync(id, status));
      setRowId(null);
      setLoading(false);
      setSuccess(true);
    }, 1000);
    setTimeout(async () => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <Box sx={{ m: 1, position: 'relative', color: 'red' }}>
      {
        success ? (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'green',
              '&:hover': { bgcolor: 'green' },
            }}
          >
            <Check />
          </Fab>
        ) : (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: green[500],
              '&:hover': { bgcolor: green[700] },
            }}
            disabled={params.id !== rowId || loading}
            onClick={handleSubmit}
          >
            <Save sx={{
              color: 'black',
              bgcolor: 'transparent',
            }}
            />
          </Fab>
        )
      }
      {
        loading && (
          <CircularProgress
            sx={{
              color: green[500],
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 1,
            }}
          />
        )
      }
    </Box>
  );
}

export default UsersActions;
