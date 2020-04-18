import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './CasesContainers.css';
import CasesBox from './CasesBox';

class CasesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            recovered: 0,
            deaths: 0,
            confirmed: 0
        }
    }
    
    componentDidUpdate(previousProps) {
        const { covidJson } = this.props;

        if (previousProps.covidJson !== this.props.covidJson) {
            const updatedCountry = covidJson.updatedCountry[0];
            this.setState({
                active: updatedCountry.Active,
                recovered: updatedCountry.Recovered,
                deaths: updatedCountry.Deaths,
                confirmed: updatedCountry.Confirmed
            });
        }
    }

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper className={"Paper"}>
                            <CasesBox name="Total Active" value={this.state.active} total={this.state.confirmed} />
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"Paper"}>
                            <CasesBox name="Total Recovered" value={this.state.recovered} total={this.state.confirmed} />
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"Paper"}>
                            <CasesBox name="Total Deaths" value={this.state.deaths} total={this.state.confirmed} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CasesGrid