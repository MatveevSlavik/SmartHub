import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const MainQuestionPreview = ({ id, title, language, answers, hours }) => {
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
        <Link to={`/questions/${id}`} className={classes.title}>
          {title}
        </Link>
        <Box display="flex">
          <Typography className={classes.hours}>{hours}</Typography>
        </Box>
      </Box>
      <Box className={classes.answers}>
        <Typography align="center">{answers.length}</Typography>
        <Typography align="center">Ответ</Typography>
      </Box>
    </Box>
  );
};

export default MainQuestionPreview;
