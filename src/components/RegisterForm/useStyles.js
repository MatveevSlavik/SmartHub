import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    justifyContent: 'center',
    marginTop: theme.spacing(10),
  },
  title: {
    padding: theme.spacing(3, 0),
    marginLeft: theme.spacing(5),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '25px',
  },
  mainText: {
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
  },
  input: {
    margin: theme.spacing(1, 5),
  },
  registerButton: {
    margin: theme.spacing(2, 5),
    textTransform: 'none',
    fontSize: '15px',
  },
}));
