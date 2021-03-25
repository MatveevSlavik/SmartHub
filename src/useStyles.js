import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    mainTitle: {
        padding: theme.spacing(20/8)
    },
    mainButtons:{
        marginLeft: theme.spacing(20/8),
        textTransform: 'none',
    },
    wrapQuestion:{
        padding: theme.spacing(20/8)
    },
    answers:{
        textAlign: "center",
        margin: "auto",
        fontSize: '1rem',
        color: "#b2bac2"
    },
    divider: {
        margin: theme.spacing(10/8, 30/8, 10/8, 30/8)
        
    }
}));