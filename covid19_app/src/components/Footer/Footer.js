import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    root: {
      background: 'linear-gradient(90deg, rgba(27,36,94,1) 0%, rgba(12,98,94,1) 100%, rgba(16,0,255,1) 100%)',
      color: 'white',
      padding: 20,
      paddingLeft: 50,
      zIndex: theme.zIndex.drawer + 1,
      position: 'relative'
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <b>created by Daniel Saw</b>
        </footer>
    )
}

export default Footer