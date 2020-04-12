import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import MapContainer from './Map/MapContainer';
import StatesCasesGrid from './Charts/StatesCasesGrid';
import StatisticsContainer from './Charts/StatisticsContainer';
import CasesGrid from './Charts/CasesContainers/CasesGrid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        paddingLeft: 250
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
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
    Spacer: theme.mixins.toolbar,
  }));

function Main() {
    const classes = useStyles();
    return(
        <main className={classes.root}>
            <div className={classes.Spacer} />
            <div>
                <Container className={classes.Dashboard}>
                    COVID19 Dashboard - United States
                </Container>
                <Container className={classes.Container}>
                    <CasesGrid />
                </Container>
                <Container className={classes.Container}>
                    <Paper className={classes.Paper}>
                        <MapContainer/>
                    </Paper>
                </Container>
                <Container className={classes.Container}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <StatesCasesGrid />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <StatisticsContainer />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </main>
    );
}

export default Main