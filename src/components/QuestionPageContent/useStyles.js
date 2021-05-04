import { makeStyles } from '@material-ui/core';
import { BLUE_HOVER_MAIN_BUTTONS } from '../../theme/constants';

export default makeStyles((theme) => ({
  newQuestion: {
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      color: BLUE_HOVER_MAIN_BUTTONS,
    },
  },
  noAnswer: {
    textTransform: 'none',
    borderRadius: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      color: BLUE_HOVER_MAIN_BUTTONS,
    },
  },
  wrapper: {
    background: theme.palette.common.white,
    padding: theme.spacing(30 / 8),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
