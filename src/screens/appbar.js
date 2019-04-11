import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

class SlotMachineToolBar extends Component {
    render(){
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link to="/" className="toolbar-link">Slot Machine</Link>
                    </Typography>
                </Toolbar>
            </AppBar>

        );
    }
}

export default SlotMachineToolBar;
