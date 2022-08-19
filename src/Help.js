import React from 'react';
import './Help.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import HelpTabs from './HelpTabs';
import axios from 'axios'
import {connect} from 'react-redux';
import {tabValue, calendarChange, fetchDataRequest, 
        fetchDataSucces, fetchDataError, showSuccessSnackbar, clearSnackbar} from './Actions/help';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";



const baseURL =  "https://dummy.restapiexample.com/api/v1/employees";

class Help extends React.Component {
 
handleChangeValue=(event, newValue)=>{
       this.props.tabValue(newValue); 
       if(this.props.value===1){
        this.getDataApi();}
       }
 
handleCalendarChange=(newDate)=>{
    this.props.calendarChange(newDate)
    }

handleCloseSnackBar=()=>{
  this.props.clearSnackbar()
}
/*
 componentDidUpdate(prevProps) {
 // const value = this.props.value;
 // const prevValue = prevProps.value;
//  console.log("PREVPROPS", prevValue)
//  console.log("props value", value)
  if (this.props.value===1 && prevProps.value !== this.props.value) this.getDataApi()
 } 
 
*/

 componentDidMount(){
   this.handleCalendarChange(); 
}

async getDataApi() {
  if(this.props.value===1){  
  try{    
   this.props.fetchDataRequest(); 
   await axios.get(baseURL)
     .then(res => {
       const dataApi =res.data;          
      console.log("status", dataApi.status)
    //   console.log("typeof", typeof(dataApi))
    //   console.log("data employees", dataApi.data) 
    //   console.log("message1", dataApi.message)       
      this.props.fetchDataSucces(dataApi);
    //  this.props.showSuccessSnackbar();
 
     })
  }  
  catch(error){
   this.props.fetchDataError(error);
   //console.log("error message", this.props.error.message)
  // console.log("error message", this.props.error)
  }
} 
 }


/*
async componentDidMount() { 
  
  try{ 
   this.props.fetchDataRequest();
 
   await axios.get(baseURL)
     .then(res => {
       const dataApi= res.data;     
      // console.log("status", dataApi.status)
       console.log("data employees", dataApi.data) 
       console.log("message1", dataApi.message)       
       this.props.fetchDataSucces(dataApi);
       this.props.showSuccessSnackbar();
 
     })
  }
   
  catch(error){
 console.log("error", this.props.fetchDataError(error));
 //  this.props.clearSnackbar();
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
           {this.props.dataApi?
           <div>
            {this.props.dataApi.data?<Snackbar
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
           </div>: this.props.value===1? 
                 <Snackbar
                   anchorOrigin={{
                   vertical: "top",
                   horizontal: "left"
                   }}
                   open={this.props.isSnackBarOpen}
                   autoHideDuration={4000}
                   onClose={this.handleCloseSnackBar}
                   aria-describedby="client-snackbar"
                   message={this.props.error.message}
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
                  />:null
                    }     
      </div>
    );
    }
  }

const mapStateToProps=(initialState)=>{
  
 return initialState.helpReducer  
}


export default connect(
mapStateToProps, {tabValue, calendarChange, fetchDataRequest, 
                  fetchDataSucces, fetchDataError, showSuccessSnackbar, clearSnackbar },

) (Help);

