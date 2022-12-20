import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton, Toolbar, Tooltip, Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import React from 'react';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../../redux/slices/userListSlice';

export default function EnhancedTableToolbar(props) {
  const { numSelected, selected } = props;
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteUsers(id));
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected}
          {' '}
          выбран(ы)
        </Typography>
      ) : null}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton type="button" onClick={() => { deleteHandler(selected); }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <AccessibilityIcon />
        </Tooltip>
      )}
    </Toolbar>
  );
}
