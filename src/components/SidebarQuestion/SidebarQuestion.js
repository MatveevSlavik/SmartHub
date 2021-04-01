import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./useStyles";

const SidebarQuestion = ({ title, answer }) => {
  const classes = useStyles();

  return (
    <Box py={2} borderTop="1px solid #dae1e8">
      <Typography>{title}</Typography>
      <Typography className={classes.answer}>{answer}</Typography>
    </Box>
  );
};

export default SidebarQuestion;
