import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    background: '#eef1f4',
    height: '100%',
    position: 'sticky',
    top: 0,
  },
  rightBarQuestion: {
    margin: theme.spacing(20 / 8),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
