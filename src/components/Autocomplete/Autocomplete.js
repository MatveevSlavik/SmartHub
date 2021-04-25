import React, { useCallback } from 'react';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';
// import { TextField } from '@material-ui/core';

import TextField from '../TextField';

const Autocomplete = (props) => {
  const { label, options, multiple, ...rest } = props;
  const {
    field: { name, value },
    form: { setFieldValue },
  } = rest;

  const handleChange = useCallback(
    (_e, value) => {
      setFieldValue(name, value);
    },
    [name, setFieldValue],
  );

  return (
    <MuiAutocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => {
        return (
          <TextField {...params} {...rest} label={label} variant="outlined" />
        );
      }}
      multiple={multiple}
      filterSelectedOptions
      getOptionSelected={(option, v) => option.id === v?.id}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Autocomplete;
