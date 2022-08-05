import React from 'react';
import './Graph.css'; 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import {connect} from 'react-redux';


class Graph extends React.Component {

  render(){
    return <div className='graph'>
              <div className='nav_menu'>               
                 <NavigationMeniu/> 
              </div>
              <div className='menu'>                   
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (                      
                   <React.Fragment>                                          
                      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                        Open Menu
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                             {this.props.graphMenu.map((menu, index)=>{                       
                               return (                 
                          <MenuItem  key={index} onClick={popupState.close}>{menu.label}</MenuItem>                       
                              )
                                })
                                    }
                            </Menu> 
                    </React.Fragment>                                        
                        )}      
              </PopupState>
            </div>                  
          </div> 
  }     
}

const mapStateToProps=(initialState)=>{
//console.log("initial state", initialState)
//console.log("MenuOptions", initialState.graphReducer)
 const graphMenu=initialState.graphReducer
     return graphMenu
}


export default connect(
  mapStateToProps
  ) (Graph);


