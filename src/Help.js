import React from 'react';
import './Help.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import HelpTabs from './HelpTabs';
import {connect} from 'react-redux';
import {tabValue} from './Actions/help';




class Help extends React.Component {
 
  handleChangeValue=(event, newValue)=>{
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
             handleChangeValue={(event, newValue)=>this.handleChangeValue(event, newValue)}
             tabOption={this.props.tabOption}
             value={this.props.value}            
             />
         </div>  
    </div>
  );
  }
}

const mapStateToProps=(initialState)=>{
 return initialState.helpReducer  
}


export default connect(
mapStateToProps, {tabValue},

) (Help);

