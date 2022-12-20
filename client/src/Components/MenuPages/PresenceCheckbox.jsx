import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { editMenuItemAsync } from '../../redux/slices/menuSlice';

export default function PresenceCheckbox({ params }) {
  const dispatch = useDispatch();
  const handleChange = (event, id) => {
    dispatch(editMenuItemAsync(id));
  };
  return (
    <Checkbox
      checked={params.value}
      onChange={(event) => handleChange(event, params.id)}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
