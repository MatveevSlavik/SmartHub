import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';

const MainQuestionPreview = ({
  title,
  language,
  answer,
  watched,
  hours,
}) => {
  const classes = useStyles();

  return (
    <Box>
      {language} {title}  {hours} {watched} {answer}{' '}
    </Box>
  );
};

export default MainQuestionPreview;
