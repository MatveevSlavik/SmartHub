import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    background: '#eef1f4',
    height: '100vh',
    position: 'sticky',
    top: 0,
  },
  rightBarTitle: {
    margin: theme.spacing(10 / 8),
  },
  divider: {
    margin: theme.spacing(15 / 8),
  },
  rightBarQuestion: {
    margin: theme.spacing(20 / 8),
  },
  title: {
    fontWeight: 'bold',
  },
}));
