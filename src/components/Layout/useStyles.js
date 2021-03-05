import { makeStyles } from '@material-ui/core';
import { LEFT_SIDEBAR_WIDTH } from './components/LeftSideBar/constants';

export default makeStyles((theme) => ({
  root: {
    background: '#dee1e5',
  },
  layoutWrapper: {
    maxWidth: 1440,
    margin: theme.spacing(0, 'auto'),
    display: 'flex',
  },
  childrenWrapper: {
    paddingLeft: LEFT_SIDEBAR_WIDTH,
    width: "100%",
  },
}));
