import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import './CasesContainers.css';

class CasesBox extends Component {

    constructor(props) {
        super(props);
        this.name = this.props.name;
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid item xs={8}>
                        <Typography className={"Typography"}>
                            <b>{this.name}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" className={"Active"}>
                            <b>0</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CasesBox