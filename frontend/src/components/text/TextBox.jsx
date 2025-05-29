import React from 'react';
import { TextField } from '@mui/material';

const TextBox = ({
  value,
  onChange,
  title,
  width,
  height,
  multiline,
  rows
}) => {
  return (
    <TextField
      label={title ? title : ''}
      value={value}
      onChange={onChange}
      variant="outlined"
      multiline={multiline ? multiline : false}
      rows={rows ? rows : undefined}
      sx={{
        width: width ? width : '100%',
        height: height ? height : 'auto',
        marginBottom: '16px'
      }}
    />
  );
};

export default TextBox;