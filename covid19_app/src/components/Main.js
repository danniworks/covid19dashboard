import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import MapContainer from './Map/MapContainer';
import StatesCasesGrid from './Charts/StatesCasesGrid';
import StatisticsContainer from './Charts/StatisticsContainer';
import CasesGrid from './Charts/CasesContainers/CasesGrid';

const drawerWidth = 240;
const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#e8e8e8',
        [theme.breakpoints.up('sm')] : {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
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
        paddingBottom: 15,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    Spacer: theme.mixins.toolbar,
});

class Main extends Component {
    render() {
        const { classes } = this.props;
        return(
            <main className={classes.root}>
                <div className={classes.Spacer} />
                <div>
                    <Container className={classes.Dashboard}>
                        United States
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
}

export default withStyles(styles)(Main);