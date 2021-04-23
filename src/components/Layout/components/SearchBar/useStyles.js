import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.primary.main,
    padding: theme.spacing(2, 0),
  },
  searchField: {
    background: '#424b5f',
    borderRadius: '7px',
  },
  searchInput: {
    color: theme.palette.common.white,
  },
  buttonQuestion: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    textTransform: 'none',
    fontSize: '15px',
    '&:hover': {
      background: '#159776',
    },
  },
}));
