import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        display: 'flex',
        height: 600
    },

    TableTitle: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingBottom: 10,
        fontSize: 20
    },
});

class Breakdown extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.TableTitle}>
                    <b>Overall</b>
                </Typography>
                <Divider />             
            </div>
        );
    }
}

export default withStyles(styles)(Breakdown);