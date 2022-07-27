import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function HomeTable({items}) {    

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell>UserId</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Body</TableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (            
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.userId}
              </TableCell>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.title}</TableCell>
              <TableCell align="right">{item.body}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HomeTable;
