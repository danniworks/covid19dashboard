import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
    root: {
        color: 'white',
        background: 'linear-gradient(180deg, rgba(95,48,136,1) 0%, rgba(54,37,162,1) 100%)'
    },
    Typography: {
        textAlign: 'left',
        paddingLeft: 25,
        paddingTop: 5,
        fontSize: 20
    },
    Numbers: {
        textAlign: 'left',
        paddingLeft: 25,
        paddingBottom: 10,
        paddingTop: 1,
        fontSize: 30
    },
    Total: {
        textAlign: 'left',
        fontSize: 20,
        paddingLeft: 25,
        paddingBottom: 10,
        paddingTop: 15,
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
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <Typography className={classes.Numbers}>
                            <b>{this.formatNumber(this.props.value)}</b>
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography className={classes.Total}>
                            <b>/ {this.formatNumber(this.props.total)} </b>
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(CasesBox);