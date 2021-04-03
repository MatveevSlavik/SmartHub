import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

const TextField = (props) => {
  const {
    form: { touched, errors },
    field,
    label,
    required,
    ...rest
  } = props;

  const errorText =
    touched[field.name] && !!errors[field.name] ? errors[field.name] : '';

  const textLabel = required ? `${label}*` : label;

  return (
    <MuiTextField
      variant="outlined"
      size="small"
      fullWidth
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...rest}
      label={textLabel}
    />
  );
};

export default TextField;
