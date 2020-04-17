import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex'
    },

    paper: {
        background: 'white',
        color: '#ab0900',
        overflow: 'auto',
        [theme.breakpoints.up("sm")]: {
            overflow: "auto",
            width: drawerWidth,
        }
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: 'black',
    },
    toolbar: theme.mixins.toolbar,

    country: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

const usaStates = [
    'Alabama','Alaska',
    'Arizona','Arkansas','California',
    'Colorado','Connecticut','Delaware',
    'Florida','Georgia','Hawaii','Idaho','Illinois',
    'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
    'Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
    'Montana','Nebraska','Nevada','New Hampshire',
    'New Jersey','New Mexico','New York','North Carolina','North Dakota',
    'Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island',
    'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
    'Washington','West Virginia','Wisconsin','Wyoming'
];

const options = ['Dashboard', 'Trends'];

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
//                <div className={classes.toolbar} />
    render () {
        const { classes } = this.props;

        const drawer = (
            <div>
                <Typography variant='h4'>COVID-19</Typography>
                <List>
                <ListItem button key="usa" className={classes.country}>
                    <ListItemText classes={{ primary: classes.country}} primary="United States of America"/>
                </ListItem>
                <Divider />
                    {options.map( (name) => (
                        <ListItem button key={name} className={classes.item}>
                            <ListItemText classes={{ primary: classes.country}} primary={name}/>
                        </ListItem>
                    ))}
                </List>  
            </div>
        );

        return (
            <div className={classes.root}>
                <nav className={classes.Drawer}>
                    <Drawer
                    classes={{paper: classes.paper}}
                    variant="permanent" anchor="left">
                        {drawer}                    
                    </Drawer>
                </nav>
            </div>
        );
    }
}

export default withStyles(styles)(SideBar)