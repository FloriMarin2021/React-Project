import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function HomeTable({items}) {
  const useStyles=()=>{
    return{
      table: {      
        width: 1350   
      } 
         }
  }     

  return (
    <TableContainer component={Paper}>
      <Table  style={{...useStyles()}} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell>Id</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Phone</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (            
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.username}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.website}</TableCell>
              <TableCell align="right">{item.phone}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HomeTable;
