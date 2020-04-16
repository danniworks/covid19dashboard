import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(to right, #800000 63%, #ffcc66 100%)',
      color: 'white',
      zIndex: theme.zIndex.drawer + 1.,
      [theme.breakpoints.up('sm')] : {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    }
}));
 
function PrimaryAppBar() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="absolute" className={classes.root}>
                <Toolbar>
                    <Typography variant="h5" color="inherit"> 
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default PrimaryAppBar