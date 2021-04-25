import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';

const AlertMessage = ({ text }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (text) setOpen(true);
  }, [text]);

  return (
    <Snackbar
      open={open}
      message={text}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
    />
  );
};

export default AlertMessage;
