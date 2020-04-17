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

const styles = theme => ({
    Header: {
        color: 'white',
        backgroundColor: '#7a7a7a'
    },
    TableTitle: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    Container: {
        height: 500
    }
});

class StateCasesGrid extends Component {
    
    constructor(props) {
        super(props);

        const colHeaders = [
            { id: 'state', label: 'State', minWidth: 100 },
            { id: 'confirmed', label: 'Confirmed Cases', minWidth: 100 },
            { id: 'active', label: 'Recovered', minWidth: 100 },
            { id: 'deaths', label: 'Deaths', minWidth: 100 },
        ];

        this.state = {
            tableColHeaders: colHeaders
        }
    }

    mapDataToTable(stateData) {
        const statesList = [];
        Object.keys(stateData.updatedStates).forEach( (key) => {
            const stateObject = stateData.updatedStates[key];
            if (stateObject.State !== "") {
                var html = 
                    <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        <TableCell key="states"><b>{stateObject.State}</b></TableCell>
                        <TableCell key="confirmed">{stateObject.Confirmed}</TableCell>
                        <TableCell key="active">{stateObject.Recovered}</TableCell>
                        <TableCell key="deaths">{stateObject.Deaths}</TableCell>
                    </TableRow>;
                statesList.push(html);
            }
        });
        return statesList;
    }

    render() {
        const { classes } = this.props;
        const { stateData } = this.props;
        const stateHtml = (stateData != null) ? this.mapDataToTable(stateData) : null;
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