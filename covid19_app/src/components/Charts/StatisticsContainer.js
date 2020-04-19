import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

const styles = () => ({
    Header: {
        color: 'white',
        backgroundColor: '#7a7a7a'
    },
    TableTitle: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    Container: {
        height: 500
    }
});

class StatisticsContainer extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Container}>
                <Typography display="block" className={classes.TableTitle}>
                    <b>Growth Trend (Feature in progress...)</b>
                </Typography>
                <Divider />
            </div>
        );
    }
}

export default withStyles(styles)(StatisticsContainer);