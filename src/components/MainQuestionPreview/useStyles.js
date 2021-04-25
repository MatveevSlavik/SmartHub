import { makeStyles } from '@material-ui/core';
import { GREY_TEXT_COLOR } from '../../theme/constants';
import { PINK_LANGUAGE_COLOR } from '../../theme/constants';

export default makeStyles((theme) => ({
  language: {
    color: PINK_LANGUAGE_COLOR,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  hours: {
    color: GREY_TEXT_COLOR,
    marginRight: theme.spacing(2),
  },
  answers: {
    color: GREY_TEXT_COLOR,
  },
}));
