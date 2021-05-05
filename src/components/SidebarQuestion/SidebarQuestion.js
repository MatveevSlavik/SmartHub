import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';

const SidebarQuestion = ({ title, answers }) => {
  const classes = useStyles();

  return (
    <Box py={2} borderTop="1px solid #dae1e8">
      <Typography>{title}</Typography>
      <Typography className={classes.answer}>{answers.length} ответ</Typography>
    </Box>
  );
};

export default SidebarQuestion;
