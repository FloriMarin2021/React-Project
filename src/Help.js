import React from 'react';
import './Help.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import HelpTabs from './HelpTabs';
import axios from 'axios'
import {connect} from 'react-redux';
import {tabValue, calendarChange, fetchDataRequest, 
        fetchDataSucces, fetchDataError, showSuccessSnackbar, clearSnackbar } from './Actions/help';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";



const baseURL =  "https://dummy.restapiexample.com/api/v1/employees";

class Help extends React.Component {
 
handleChangeValue=(event, newValue)=>{
if(newValue===1){
    this.getDataApi();
}
      this.props.tabValue(newValue);
   // console.log("newvalue", newValue)  
  }
 
handleCalendarChange=(newDate)=>{
    this.props.calendarChange(newDate)
    }

handleCloseSnackBar=()=>{
  this.props.clearSnackbar()
}

async getDataApi() {   
  try{ 
   this.props.fetchDataRequest(); 
   await axios.get(baseURL)
     .then(res => {
       const dataApi = res.data;     
      // console.log("status", dataApi.status)
    //   console.log("data employees", dataApi.data.length) 
       console.log("message1", dataApi.message)       
       this.props.fetchDataSucces(dataApi);
       this.props.showSuccessSnackbar();
 
     })
  }
   
  catch(error){
   this.props.fetchDataError(error);
   this.props.clearSnackbar();
  }

 }
// componentDidMount(){
//  this.getDataApi();
// }
/*
async componentDidMount() { 
  
  try{ 
   this.props.fetchDataRequest();
 
   await axios.get(baseURL)
     .then(res => {
       const dataApi = res.data;     
      // console.log("status", dataApi.status)
       console.log("data employees", dataApi.data.length) 
     //  console.log("message1", dataApi.message)       
       this.props.fetchDataSucces(dataApi);
       this.props.showSuccessSnackbar();
 
     })
  }
   
  catch(error){
   this.props.fetchDataError(error);
   this.props.clearSnackbar();
  }

 }
 */
  render(){

  return (
    <div className='help'>
         <div className='help_menu'>
             <NavigationMeniu />
         </div>
         <div >
             <HelpTabs          
             handleChangeValue={(event, newValue)=>this.handleChangeValue(event, newValue)}
             tabOption={this.props.tabOption}
             value={this.props.value}
             date={this.props.date}
             handleCalendarChange={this.handleCalendarChange}
             dataApi={this.props.dataApi} 
                            
             />
         </div> 
         <div>
          {!this.props.loading?<Snackbar
              anchorOrigin={{
              vertical: "top",
              horizontal: "left"
             }}
             open={this.props.isSnackBarOpen}
             autoHideDuration={4000}
             onClose={this.handleCloseSnackBar}
             aria-describedby="client-snackbar"
             message={this.props.dataApi.message}      
             action={[
                <IconButton
                   key="close"
                   aria-label="close"
                   color="inherit"
                   onClick={this.handleCloseSnackBar}
                   >
                <Icon>close</Icon>
               </IconButton>
      ]}
    />:null}
         </div>
         
    </div>
  );
  }
}

const mapStateToProps=(initialState)=>{
 return initialState.helpReducer  
}


export default connect(
mapStateToProps, {tabValue, calendarChange, fetchDataRequest, 
                  fetchDataSucces, fetchDataError, clearSnackbar, showSuccessSnackbar },

) (Help);

