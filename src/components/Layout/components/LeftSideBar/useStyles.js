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
    marginTop: theme.spacing(20 / 8,),
    color: theme.palette.common.white,
    textTransform: 'none',
    '&:hover': {
      background: "none",
      color: theme.palette.common.white
    }
  },
  LeftButtons: {
    marginTop: theme.spacing(20 / 8),
    color: theme.palette.text.secondary,
    textTransform: 'none',
    '&:hover': {
      background: "none",
      color: theme.palette.common.white
    }
  },
  divider:{
    marginTop: theme.spacing(2)
  }

}));
