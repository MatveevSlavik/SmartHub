import { makeStyles } from '@material-ui/core';
import { GREY_TEXT_COLOR } from '../../theme/constants';

export default makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.common.white,
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
  },
  mainText: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
  secondText: {
    marginBottom: theme.spacing(1),
    color: GREY_TEXT_COLOR,
    fontSize: "14px"
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  publish:{
    textTransform: 'none',
    fontSize: "14px",
}
}));
