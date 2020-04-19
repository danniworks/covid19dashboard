import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';

const styles = () => ({
    Header: {
        color: 'white',
        background: 'linear-gradient(180deg, rgba(95,48,136,1) 0%, rgba(54,37,162,1) 100%)',
        fontWeight: 'bold'
    },
    TableTitle: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    Container: {
        height: 500
    },
    Active: {
        color: 'red'
    }
});

class StateCasesGrid extends Component {
    
    constructor(props) {
        super(props);

        const colHeaders = [
            { id: 'state', label: 'State', minWidth: 100 },
            { id: 'confirmed', label: 'Confirmed', minWidth: 100 },
            { id: 'active', label: 'Active', minWidth: 100 },
            { id: 'deaths', label: 'Deaths', minWidth: 100 },
        ];

        this.state = {
            tableColHeaders: colHeaders
        }
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    mapDataToTable(covidJson) {
        const { classes } = this.props;
        const statesList = [];
        Object.keys(covidJson.updatedStates).forEach( (key) => {
            const stateObject = covidJson.updatedStates[key];
            if (stateObject.State !== "Recovered") {
                var html = 
                    <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        <TableCell key="states"><b>{stateObject.State}</b></TableCell>
                        <TableCell key="confirmed">{this.formatNumber(stateObject.Confirmed)}</TableCell>
                        <TableCell key="active" className={classes.Active}>{this.formatNumber(stateObject.Active)}</TableCell>
                        <TableCell key="deaths">{this.formatNumber(stateObject.Deaths)}</TableCell>
                    </TableRow>;
                statesList.push(html);
            }
        });
        return statesList;
    }

    render() {
        const { classes } = this.props;
        const { covidJson } = this.props;
        const stateHtml = (covidJson != null) ? this.mapDataToTable(covidJson) : null;
        return (
            <div>
                <Typography display="block" className={classes.TableTitle}>
                        <b>Cases by State</b>
                </Typography>
                <Divider />
                <TableContainer className={classes.Container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {this.state.tableColHeaders.map( (headers) => (
                                    <TableCell key={headers.id} style={{ minWidth: headers.minWidth }} className={classes.Header}>
                                        {headers.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stateHtml}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
export default withStyles(styles)(StateCasesGrid);