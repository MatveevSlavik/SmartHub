import { makeStyles } from '@material-ui/core';
import { BLUE_HOVER_MAIN_BUTTONS } from '../../theme/constants';

export default makeStyles((theme) => ({
  mainTitle: {
    padding: theme.spacing(20 / 8),
  },
  mainButtons: {
    // display: 'flex',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      color: BLUE_HOVER_MAIN_BUTTONS,
      background: 'none',
    },
  },
  mainButtons2: {
    textTransform: 'none',
    borderRadius: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      color: BLUE_HOVER_MAIN_BUTTONS,
      background: 'none',
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
