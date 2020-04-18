import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import * as d3 from 'd3';

const styles = () => {

}

class PieChart extends Component {
    
    constructor(props) {
        super(props);
        this.width = 200;
        this.height = 200;
    }

    render() {
        return (
            <svg>
                
            </svg>
        );
    }
}

export default withStyles(styles)(PieChart);