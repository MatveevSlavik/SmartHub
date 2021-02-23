import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2, 3),
    background: theme.palette.primary.dark,
  },
  logo: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
