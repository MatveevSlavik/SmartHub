import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing(10),
  },
  mainText: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
  },
  title: {
    padding: theme.spacing(3, 0),
    marginLeft: theme.spacing(5),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '25px',
  },
  input: {
    margin: theme.spacing(1, 5),
  },
  signInButton: {
    margin: theme.spacing(3, 5),
    textTransform: 'none',
    fontSize: '15px',
    background: theme.palette.secondary.main,
  },
  registerButton: {
    margin: theme.spacing(3, 5),
    textTransform: 'none',
    fontSize: '15px',
  },
  secondText: {
    marginLeft: theme.spacing(5),
  },
}));
