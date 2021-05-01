import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    margin: theme.spacing(2, 0),
    paddingLeft: theme.spacing(50 / 8),
  },
  avatar: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  nickname: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
