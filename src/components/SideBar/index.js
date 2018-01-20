import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
const style = {
    height: "100%"
}

class SideBarComp extends Component {
    render() {
        return (
            <div className="sidebar">
                <Paper style={style} zDepth={3}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Paper>
            </div>
        );
    }
}

export default SideBarComp;