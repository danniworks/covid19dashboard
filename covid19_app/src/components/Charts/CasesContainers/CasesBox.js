import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
    root: {
        color: 'white',
        backgroundColor: '#7a7a7a'
    },

    Typography: {
        textAlign: 'left',
        paddingLeft: 25,
        paddingTop: 5
    },

    Numbers: {
        textAlign: 'left',
        paddingLeft: 25,
        paddingBottom: 10,
        paddingTop: 1,
        fontSize: 30
    }
});

class CasesBox extends Component {

    constructor(props) {
        super(props);
        this.name = this.props.name;
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.Typography}>
                            <b>{this.name}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.Numbers}>
                            <b >{this.formatNumber(this.props.value)}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(CasesBox);