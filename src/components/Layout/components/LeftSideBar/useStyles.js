import { makeStyles } from '@material-ui/core';
import { LEFT_SIDEBAR_WIDTH } from './constants';

export default makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.primary.main,
    width: LEFT_SIDEBAR_WIDTH,
    height: '100vh',
  },
  fixedSideBar: {
    position: 'fixed',
    top: 0,
  },
}));
