import { makeStyles } from '@material-ui/core';
import { APPBAR_HEIGHT } from './constants';

export default makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(0, 3),
    height: APPBAR_HEIGHT,
    background: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
