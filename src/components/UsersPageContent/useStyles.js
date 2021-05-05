import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4),
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '20px',
  },
  ul: {
    padding: theme.spacing(5),
  },
  language: {
    paddingBottom: theme.spacing(2),
    cursor: 'pointer',
    width: 'fit-content',
    textDecoration: 'none',
    display: 'block',
    color: theme.palette.text.primary,
  },
  wrapper: {
    background: theme.palette.common.white,
  },
  question: {
    paddingTop: theme.spacing(2),
    color: 'darkblue',
  },
}));
