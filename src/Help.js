import React from 'react';
import './Help.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import HelpTabs from './HelpTabs';
import axios from 'axios'
import {connect} from 'react-redux';
import {tabValue, calendarChange, fetchDataRequest, 
        fetchDataSucces, fetchDataError, clearSnackbar, listDisplay} from './Actions/help';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import Slide from "@mui/material/Slide";





const baseURL =  "https://dummy.restapiexample.com/api/v1/employees";

class Help extends React.Component {
 
handleChangeValue=(event, newValue)=>{
       this.props.tabValue(newValue); 
      // console.log("newValue HANDLE", newValue)
     //  console.log("value HANDLE", this.props.value)
       if(newValue===1){
        this.getDataApi();}

     
      }


handleChangeWindow=(option)=>{ 
    this.props.listDisplay(option);
  //  console.log("option", option.label)
   // console.log("link", option.link)
    if(option.label==='linkedin'){
      window.open(
        option.link,
        "",
        "width=600, height=400, left=200, top=200"
      ); 
    }
    else if(option.label==='google'){
      window.open(
        option.link,
        "_blank"       
      );
     }
    else if(option.label==='youtube'){
      setTimeout(() => {          
        window.location.replace(option.link)}, 2000)  
      }
    }

handleRedirectPage=()=>{
  const path="/home"
  window.location.replace(path)
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

 componentDidMount(newValue){

  if(this.props.value===newValue){ 
   this.handleChangeValue(newValue);    
   }
}

async getDataApi() {
 
  try{    
   this.props.fetchDataRequest(); 
   await axios.get(baseURL)
     .then(res => {
       const dataApi =res.data;          
      console.log("status", dataApi.status)
    //   console.log("data employees", dataApi.data) 
    //   console.log("message1", dataApi.message)       
      this.props.fetchDataSucces(dataApi);
  
 
     })
  }  
  catch(error){
   this.props.fetchDataError(error);
   console.log("error message", this.props.error.message)
  // console.log("error message", this.props.error)
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
               list={this.props.list}
               handleChangeWindow={(option)=>this.handleChangeWindow(option)}
               handleRedirectPage={this.handleRedirectPage}
                             />
           </div>       
           {this.props.dataApi&&this.props.dataApi.message? 
           <Snackbar
               anchorOrigin={{
               vertical: "top",
               horizontal: "left"
                             }}
               open={this.props.isOpen}
               autoHideDuration={4000}
               TransitionComponent={Slide}
               transitionDuration={{ enter: 1000, exit: 2000 }}
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
    );
    }
  }

const mapStateToProps=(initialState)=>{

 return initialState.helpReducer  
}


export default connect(
mapStateToProps, {tabValue, calendarChange, fetchDataRequest, 
                  fetchDataSucces, fetchDataError, clearSnackbar, listDisplay},

) (Help);

