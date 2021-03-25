import { makeStyles } from '@material-ui/core';
import { LEFT_SIDEBAR_WIDTH } from './constants';

export default makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.primary.main,
    width: LEFT_SIDEBAR_WIDTH,
    height: '100vh',
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  authBut: {
    margin: theme.spacing(20 / 8, 0, 0, 20/8),
    textTransform: 'none',
    color: "white"
  },
  LeftButtons: {
    margin: theme.spacing(20 / 8, 0, 0, 20/8),
    textTransform: 'none',
    color: "#a7b3cb",
    '&:hover': {
      background: "#4f5a6e",
      color: "white"
    }
  },
  leftIcons: {
    position: 'absolute',
    margin: theme.spacing(24 / 8, 0, 0, 20 / 8),
  },
}));
