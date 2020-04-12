import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './CasesContainers.css';
import CasesBox from './CasesBox';

class CasesGrid extends Component {
    
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper className={"Paper"}>
                            <CasesBox name="Total Active"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"Paper"}>
                            <CasesBox name="Total Recovered"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"Paper"}>
                            <CasesBox name="Total Deaths"/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CasesGrid