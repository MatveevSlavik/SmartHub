import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from '../MainQuestionPreview/useStyles';

const SidebarQuestion = ({ title,  answer }) => {
  const classes = useStyles;

  return (
    <Box>
      {title} {answer}
    </Box>
  );
};

export default SidebarQuestion;
