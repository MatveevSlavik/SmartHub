import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';

const MainQuestionPreview = ({ title, language, answer, watched, hours }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
      py={2}
      borderBottom="1px solid #dae1e8"
    >
      <Box>
        <Typography className={classes.language}>{language}</Typography>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Box display="flex">
          <Typography className={classes.hours}>{hours} </Typography>
          <Typography className={classes.watched}>{watched} </Typography>
        </Box>
      </Box>
      <Box className={classes.answers}>
        <Typography align="center">{answer}</Typography>
        <Typography align="center">Ответ</Typography>
      </Box>
    </Box>
  );
};

export default MainQuestionPreview;
