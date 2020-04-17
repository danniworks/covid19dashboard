import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 65,
        background: 'white',
        color: 'black',
        zIndex: theme.zIndex.drawer + 1.,
    },

    icon: {
        paddingLeft: 25,
        height: 60,
        width: 200
    }
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
 
function PrimaryAppBar(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
            <AppBar className={classes.root}>
                <img 
                    src={window.location.origin + '/st_logo.png'} 
                    className={classes.icon}
                    alt="Logo"/>
            </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}

export default PrimaryAppBar