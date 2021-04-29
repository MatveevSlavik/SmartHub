import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
    background: theme.palette.background.default,
    padding: theme.spacing(4),
    flexDirection: 'column',
  },
  userWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  nickname: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  commentDivider: {
    background: theme.palette.text.primary,
  },
}));
