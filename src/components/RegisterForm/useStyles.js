import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    justifyContent: 'center',
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '25px',
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  registerButton: {
    textTransform: 'none',
    fontSize: '15px',
    marginBottom: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(4),
  },
}));
