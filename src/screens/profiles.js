import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';


import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import FilterListIcon from '@material-ui/icons/FilterList';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

class Profiles extends Component {

    render() {

        console.log(this.props.profiles);

        const rows = this.props.profiles.map(p => (
            <TableRow>
                <TableCell component="th" scope="row">
                <Link to={"profiles/"+p.name}>{p.slot.name}</Link>
                </TableCell>
                <TableCell><Link to={"profiles/"+p.name}>{p.name}</Link></TableCell>
                <TableCell><Link to={"profiles/"+p.name}>{p.abtest}</Link></TableCell>
            </TableRow>
        ));

        return (
            <div className="profiles">
                <h1>Profiles</h1>

                <Paper className="add-profile-hero">

                    <Toolbar>

                        <div>
                        <Typography variant="h6">
                            <Link className="toolbar-link" to="/new">Add</Link>
                        </Typography>

                        </div>
                        
                        <div className="spacer" />

                        <Tooltip title="Filter list">
                            <IconButton aria-label="Filter list">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>

                    </Toolbar>


                </Paper>

                <Paper style={{marginLeft:"20%", marginRight:"20%"}}>

                    <Toolbar>

                        <div className="table-header">
                            <Typography variant="h6">
                                Profiles
                            </Typography>
                        </div>
                        
                        <div className="spacer" />

                        <Tooltip title="Filter list">
                            <IconButton aria-label="Filter list">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>

                    </Toolbar>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Slot</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>ABTest</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );

    }

}
  
export default Profiles;
