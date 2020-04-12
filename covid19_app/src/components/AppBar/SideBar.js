import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles( (theme) => ({
    drawerPaper: {
        width: 300,
        background: 'white',
        flexShrink: 1,
    },
    spacer: theme.mixins.toolbar,
    item: {
        padding: 10,
        paddingLeft: 20
    },
    country: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
}));

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
    'Washington','West Virginia','Wisconsin','Wyoming'];

function SideBar() {
    const classes = useStyles();
    return (
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}} anchor="left">
            <div className={classes.spacer}/> 
            <List>
                <ListItem button key="usa" className={classes.country}>
                    <ListItemText classes={{ primary: classes.country}} primary="United States of America"/>
                </ListItem>
                <Divider />
                {usaStates.map( (name) => (
                    <ListItem button key={name} className={classes.item}>
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>  
        </Drawer>
    );
}

export default SideBar