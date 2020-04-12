import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(90deg, rgba(27,36,94,1) 0%, rgba(12,98,94,1) 100%, rgba(16,0,255,1) 100%)',
      zIndex: theme.zIndex.drawer + 1
    }
}));
 
function PrimaryAppBar() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="absolute" className={classes.root}>
                <Toolbar>
                    <Typography variant="h5" color="inherit"> 
                        COVID19 Trends and Statistics
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default PrimaryAppBar