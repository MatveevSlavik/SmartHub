import React from 'react';
import classNames from 'classnames';
import { Box } from '@material-ui/core';

import { useScroll } from '../../../../hooks';
import { APPBAR_HEIGHT } from '../AppBar/constants';

import useStyles from './useStyles';

const LeftSideBar = () => {
  const classes = useStyles();
  const { scrollY } = useScroll();

  return (
    <Box
      className={classNames(classes.wrapper, {
        [classes.fixedSideBar]: scrollY > APPBAR_HEIGHT,
      })}
      component="aside"
    ></Box>
  );
};

export default LeftSideBar;
