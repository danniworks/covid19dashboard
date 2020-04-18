import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import UsaMapContainer from './Map/UsaMapContainer';

import StatesCasesGrid from './Charts/StatesCasesGrid';
import StatisticsContainer from './Charts/StatisticsContainer';
import CasesGrid from './Charts/CasesContainers/CasesGrid';
import Breakdown from './Charts/Breakdown';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5'
    },
    Paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: 'white',
    },
    Container: {
        padding: theme.spacing(1)
    },
    Dashboard: {
        textAlign: 'left',
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 20,
        fontSize: 18,
        color: '#4287f5'
    },
    Spacer: theme.mixins.toolbar,
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: 'wss://api.covid19statstrack.com',
            socket: null,
            covidJson: null
        }
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const ws = new WebSocket(endpoint);
        ws.onopen = () => { 
            this.setState({socket : ws});
            ws.send({"action" : "updates"});
            ws.onmessage = evt => {
                this.setState({covidJson: this.parseJson(evt.data)});
            }
        };
    }

    parseJson(data) {
        const dataJson = JSON.parse(data);
        return dataJson;
    }

    render() {
        const { classes } = this.props;
        return(
            <main className={classes.root}>
                <div className={classes.Spacer} />
                <div>
                    <Container className={classes.Dashboard}>
                        Dashboard (Under Construction) / United States / Last Updated : 4/16/2020
                    </Container>
                    <Container className={classes.Container}>
                        <CasesGrid covidJson={this.state.covidJson} />
                    </Container>
                    <Container className={classes.Container}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Paper className={classes.Paper}>
                                    <UsaMapContainer covidJson={this.state.covidJson} />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.Paper}>
                                    <Breakdown covidJson={this.state.covidJson}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className={classes.Container}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <StatesCasesGrid covidJson={this.state.covidJson} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <StatisticsContainer covidJson={this.state.covidJson} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Main);