import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


function GraphMenu(props){
//console.log("props", props);

    return(
        <div>
             <div className='menu'>                   
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                                              
                   <React.Fragment>                                          
                      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                        Open Menu
                      </Button>
                      <Menu 
                       {...bindMenu(popupState)}>
                             {props.graphMenu.map((menu, index)=>{                       
                               return (                 
                          <MenuItem 
                           key={index} 
                           onClick={()=>{props.handleChange(menu, popupState)}}
                           value={menu.label}
                           >{menu.label} 
                           </MenuItem>                       
                              )
                                })
                                    }
                            </Menu> 
                    </React.Fragment>                                        
                        )}      
              </PopupState>
            </div>  
                     
        </div>
    );
}

export default GraphMenu