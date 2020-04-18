import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

import PieChart from './CasesContainers/PieChart';

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
    constructor(props) {
        super(props);

        this.state = {
            confirmed: 0,
            active: 0,
            recovered: 0,
            deaths: 0
        }
    }

    componentDidUpdate(previousProps) {
        const { covidJson } = this.props;

        if (previousProps.covidJson !== this.props.covidJson) {
            const updatedCountry = covidJson.updatedCountry[0];
            console.log(updatedCountry);
            this.setState({
                confirmed: updatedCountry.Confirmed,
                active: updatedCountry.Active,
                recovered: updatedCountry.Recovered,
                deaths: updatedCountry.Deaths
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.TableTitle}>
                    <b>Overall</b>
                </Typography>
                <Divider />     
                <PieChart />        
            </div>
        );
    }
}

export default withStyles(styles)(Breakdown);