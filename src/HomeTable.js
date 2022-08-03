import React from 'react';
import './Home.css'; 
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from "@mui/material/Box";
import TextField from '@material-ui/core/TextField';
//import Modal from "@material-ui/core/Modal";
import Typography from '@mui/material/Typography';
import clsx from 'clsx';





function HomeTable({  items,handleCloseEditForm,  handleEditChange, newEditPost, handleEditSubmit,
                      appearEditForm, infoModal, isEditForm, appearForm, isHideForm, 
                      handleSubmit, deleteRow, handleChange, isOpenModal, handleOpenModal, handleCloseModal}) {  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      top: '30%',
      left: '40%',
      height:300,
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2, 2, 3),
    },
    paper_new: {
      position: 'absolute',
      top: '30%',
      left: '20%',
      height:300,
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2, 2, 3),
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection:'row'
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '110ch',
    },
  }));
  const classes = useStyles()
    
  return (
    <div>
       <Button variant="contained"
          onClick={appearForm} >
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
         <div>
           <TextField   onChange={handleChange}
               name='userId' 
               id="outlined-basic" label="UserId" variant="outlined" 
               />
           <TextField  onChange={handleChange}
               name='title' 
               id="outlined-basic" label="Title" variant="outlined" />
            <TextField  onChange={handleChange}
                name='body' 
                id="outlined-basic" label="body" variant="outlined" />       
            <Button 
                 onClick={handleSubmit}  variant="outlined" size="small">
                      SUBMIT
            </Button>    
             </div>        
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
            <TableRow   key={index}>
              <TableCell  component="th" scope="row" >
                {item.userId}
              </TableCell >
              <TableCell align="right" >{item.id}</TableCell>
              <TableCell align="right">{item.title}</TableCell>
              <TableCell align="right">{item.body}</TableCell>
              <TableCell align="right">
              <Button   onClick={() => handleOpenModal(index)}
               variant="contained">OPEN{index}</Button> 
               {isOpenModal&&
                    <Box >
                          <div
                        className={classes.paper}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                           >                       
                      <Typography id="modal-modal-title" variant="h6" component="h1">
                           ID: {infoModal.id}
                      </Typography>
                      <Typography id="modal-modal-description" component="h2">
                          Body: {infoModal.body}
                       </Typography>
                       <Typography id="modal-modal-description" component="h3">
                          Title:{infoModal.title}     
                        </Typography> 
                        <Button 
                         onClick={handleCloseModal}  variant="outlined" size="small">
                           CLOSE MODAL
                       </Button>                     
                           </div>
                           </Box>
                               }                         
                   <Button variant="contained" 
                      onClick={() => appearEditForm(index)}>
                     EDIT
                   </Button>
                      {!isEditForm&& <Box className={classes.root} >
                           <div   className={classes.paper_new}>
                       <TextField   className={clsx(classes.margin, classes.textField)}
                          onChange={handleEditChange}
                          name='userId' 
                         variant="standard" 
                          value={newEditPost.userId} 
                          />                      
                        <TextField   className={clsx(classes.margin, classes.textField)}
                          onChange={handleEditChange}
                          name='title' value={newEditPost.title} 
                          variant="standard" />
                        <TextField   className={clsx(classes.margin, classes.textField)}
                          onChange={handleEditChange}
                           name='body' value={newEditPost.body} 
                           variant="standard" />      
                        <Button   
                        onClick={ handleEditSubmit}
                           variant="outlined" size="small">
                         SAVE
                        </Button> 
                        <Button  
                         onClick={handleCloseEditForm}  variant="outlined" size="small">
                           CLOSE 
                       </Button>    
                    </div>        
                     </Box>}
                   <Button  onClick={()=>deleteRow(index)}
                   variant="contained" >
                     DELETE
                   </Button>
              </TableCell>
            </TableRow >            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   <div> 
 </div> 
                 
</div>
  );
}

export default HomeTable;
