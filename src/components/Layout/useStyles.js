import { makeStyles } from '@material-ui/core';
import { APPBAR_HEIGHT } from './components/AppBar/constants';

export default makeStyles((theme) => ({
  root: {
    background: '#dee1e5',
    height: '100vh',
  },
  layoutWrapper: {
    maxWidth: 1440,
    margin: theme.spacing(0, 'auto'),
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: `calc(100% - ${APPBAR_HEIGHT}px)`,
  },
  childrenWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
