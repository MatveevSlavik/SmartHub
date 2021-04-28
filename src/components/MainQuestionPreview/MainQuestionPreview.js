import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const MainQuestionPreview = ({ id, title, language, answer, hours }) => {
  const classes = useStyles();
  const { push } = useHistory();

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
        <Typography
          title={title}
          variant="h6"
          className={classes.title}
          onClick={() => push(`/questions/${id}`)}
        >
          {title}
        </Typography>
        <Box display="flex">
          <Typography className={classes.hours}>{hours}</Typography>
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
