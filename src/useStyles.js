import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  mainTitle: {
    padding: theme.spacing(20 / 8),
  },
  mainButtons: {
    // display: 'flex',
    },
  mainButtons2: {
    textTransform: 'none',
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: theme.palette.primary.dark,
      background: theme.palette.common.white,
    },
  },
  wrapQuestion: {
    padding: theme.spacing(20 / 8),
  },
  answers: {
    textAlign: 'center',
    // margin: "auto",
    // fontSize: '1rem',
    color: '#b2bac2',
  },

  wrapper: {
    background: theme.palette.common.white,
    padding: theme.spacing(30 / 8),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
