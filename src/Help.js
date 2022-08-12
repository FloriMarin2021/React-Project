import React from 'react';
import './Help.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import HelpTabs from './HelpTabs';
import {connect} from 'react-redux';
import { tabSelected, tabDisplay, tabValue} from './Actions/help';
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";


class Help extends React.Component {
  
  handleChange = (option) => {    
  this.props.tabDisplay(option);

  };

  handleChangeValue=(newValue)=>{
    this.props.tabValue(newValue);
  }


  render(){

  return (
    <div className='help'>
         <div className='help_menu'>
             <NavigationMeniu />
         </div>
         <div >
             <HelpTabs
             handleChange={(option)=>this.handleChange(option)}
             handleChangeValue={this.handleChangeValue}
             tabOption={this.props.tabOption}
             value={this.props.value}
             />
         </div>
         <div>{this.props.displayTab.label}</div> 
       
       { this.props.displayTab.id==='one'?
            <DatePicker   showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          timeCaption="time"
                          dateFormat="MMMM d, yyyy h:mm aa"
                          selected={new Date()}/>:null}
    </div>
  );
  }
}


const mapStateToProps=(initialState)=>{
// console.log("initialstate", initialState.helpReducer)
 //const value=initialState.helpReducer.value
  return initialState.helpReducer
  
}


export default connect(
mapStateToProps, {tabSelected, tabDisplay, tabValue},

) (Help);

