import React from 'react';
import moment from 'moment';
import { Avatar, Box, Typography } from '@material-ui/core';

import useStyles from './useStyles';

const MainQuestionAnswer = ({ nickname, comment, createdAt }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Avatar className={classes.avatar} />
      <Typography paragraph variant="body2" className={classes.nickname}>
        {nickname}
      </Typography>
      <Typography gutterBottom>{comment}</Typography>
      <Typography color="textSecondary" variant="caption">Ответ добавлен: {moment(createdAt).fromNow()}</Typography>
    </Box>
  );
};

export default MainQuestionAnswer;
