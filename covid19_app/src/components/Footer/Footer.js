import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    root: {
      background: 'black',
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
            @danniworks
        </footer>
    )
}

export default Footer