import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

import PieChart from './CasesContainers/PieChart';

const styles = () => ({
    root: {
        height: 600
    },
    TableTitle: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingBottom: 10,
        fontSize: 20
    }
});

class Breakdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryJson: null,
            updated: false
        }
    }

    componentDidUpdate(previousProps) {
        const { covidJson } = this.props;
        if (previousProps.covidJson !== this.props.covidJson) {
            const updatedCountry = covidJson.updatedCountry[0];
            this.setState({
                countryJson: updatedCountry,
                updated: true
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.TableTitle}>
                    <b>Overall Ratio</b>
                </Typography>
                <Divider />   
                <PieChart 
                    json={this.state.countryJson}
                    updated={this.state.updated} />        
            </div>
        );
    }
}

export default withStyles(styles)(Breakdown);