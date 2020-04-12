import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import usaStatesData from './usaStates.json';
import './Charts.css';

class StateCasesGrid extends Component {
    
    constructor(props) {
        super(props);
        this.gridRef = React.createRef();

        const colHeaders = [
            { id: 'state', label: 'State', minWidth: 100 },
            { id: 'confirmed', label: 'Confirmed Cases', minWidth: 100 },
            { id: 'active', label: 'Recovered', minWidth: 100 },
            { id: 'recovered', label: 'Deaths', minWidth: 100 },
        ];

        const listUsaStates = [];
        Object.keys(usaStatesData).forEach( function(key) {
            var val = 
                <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                    <TableCell key="states">{key}</TableCell>
                    <TableCell key="confirmed">0</TableCell>
                    <TableCell key="active">0</TableCell>
                    <TableCell key="recovered">0</TableCell>
                </TableRow>;
            listUsaStates.push(val);
        });

        this.state = {
            statesList : listUsaStates,
            tableColHeaders: colHeaders
        }
    }

    render() {
        return (
            <div>
                <Typography variant="h6" color="inherit" display="block" className="TableTitle">
                        <b>Cases by State</b>
                </Typography>
                <TableContainer className={"Container"}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {this.state.tableColHeaders.map( (headers) => (
                                    <TableCell key={headers.id} style={{ minWidth: headers.minWidth }}>
                                        {headers.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.statesList}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
export default StateCasesGrid