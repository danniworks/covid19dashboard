import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

import './Charts.css';

class StatisticsContainer extends Component {

    render() {
        return (
            <Typography variant="h6" color="inherit" display="block" className="TableTitle">
                    <b>Trend</b>
            </Typography>
        );
    }
}

export default StatisticsContainer