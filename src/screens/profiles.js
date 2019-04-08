import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
                <Paper>
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
