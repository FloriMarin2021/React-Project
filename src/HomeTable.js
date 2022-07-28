import React from 'react';
import './Home.css'; 
//import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




function HomeTable({items, appearForm, isHideForm, handleSubmit, deleteRow}) {  


  const StyledTableRow = withStyles((theme) => ({
    root: {
      height: 5
    }
  }))(TableRow);
  
  const StyledTableCell = withStyles((theme) => ({
    root: {
      height:5,
      padding: "0px 5px"     
    }
  }))(TableCell);


  return (
    <div>
    <Button variant="contained"
    onClick={appearForm}
     >
          CREATE NEW
    </Button>
   {!isHideForm&&<Box 
 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
  
      name='userId' 
       id="outlined-basic" label="UserId" variant="outlined" 
      />
      <TextField 
      name='id' 
      id="outlined-basic" label="Id" variant="outlined" />
      <TextField
       name='title'
       id="outlined-basic" label="Title" variant="outlined" />
      <TextField  
      name='body'
      id="outlined-basic" label="body" variant="outlined" />
      <Button 
        onSubmit={handleSubmit}  variant="outlined" size="small">
          SUBMIT
      </Button>
      
    </Box>}
    <TableContainer component={Paper} className='home_table'>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow   >
           <TableCell>UserId</TableCell>
            <TableCell align="right" width='50px' >Id</TableCell>
            <TableCell align="right"width='150px' >Title</TableCell>
            <TableCell align="right" width='250px'>Body</TableCell>
            <TableCell align="right" width='250px' >Buttons</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody className='table_body'>
          {items.map((item, index) => (            
            <StyledTableRow  key={item.id}>
              <StyledTableCell  component="th" scope="row" >
                {item.userId}
              </StyledTableCell >
              <StyledTableCell align="right" >{item.id}</StyledTableCell>
              <StyledTableCell align="right">{item.title}</StyledTableCell>
              <StyledTableCell align="right">{item.body}</StyledTableCell>
              <StyledTableCell align="right">
                   <Button variant="contained" >
                    ADD
                   </Button>
                   <Button variant="contained" >
                     EDIT
                   </Button>
                   <Button  onClick={deleteRow(index)}
                   variant="contained" >
                     DELETE
                   </Button>
              </StyledTableCell>

            </StyledTableRow >
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default HomeTable;
