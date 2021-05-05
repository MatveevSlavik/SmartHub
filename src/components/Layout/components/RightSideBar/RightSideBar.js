import React from 'react';

import { Box,  Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import SidebarQuestion from '../../../SidebarQuestion/SidebarQuestion';
import { useSelector } from 'react-redux';

const RightSideBar = () => {
  const classes = useStyles();
  const { questions } = useSelector((state) => state.questionsData);

  return (
    <Grid item md={4} className={classes.wrapper}>
      <Box className={classes.rightBarQuestion}>
        <Typography className={classes.title} variant="button" paragraph>Самое интересное за 24 часа</Typography>
        {questions.map(({ id, question, answers = [] }) => {
        return (
          <Grid xs={12} item key={id}>
            <SidebarQuestion
              id={id}
              title={question}
              answers={answers}
            />
          </Grid>
        );
      })}
      </Box>
    </Grid>
  );
};

export default RightSideBar;
