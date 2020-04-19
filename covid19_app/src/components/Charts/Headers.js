import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

const styles = () => ({
    Paper: {
        backgroundColor: 'white',
    },
    Container: {
        paddingBottom: 5
    }
});

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedTime: null
        }
    }

    componentDidUpdate() {
        if (this.props.covidJson !== null && this.state.updatedTime === null) {
            this.setTime(this.props.covidJson);
        }
    }

    setTime(covidJson) {
        const time = new Date(covidJson.updatedCountry[0]['Latest Update']).toLocaleString("en-US", {timeZone: "America/New_York"});
        this.setState({
            updatedTime: time + ' EST'
        });
    }

    render() {
        return(
            <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                Dashboard / United States
                </Grid>
                <Grid item xs={4}>
                    <Box height={20}>
                        <b>Last Updated : {this.state.updatedTime}</b>         
                    </Box>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Headers)