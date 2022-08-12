import React from 'react';
//import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
import './Help.css'; 
 
  
 function HelpTabs(props) {
  //console.log("props tabMenu", props.tabMenu)
 //console.log("value props", props.value)
 //console.log(" props", props)
  
    return (
        
      <div className='help_tabs'>
        <Tabs className='help_tab'        
          orientation="vertical"
          variant="scrollable"
          aria-label="Vertical tabs example"
          value={props.value}
          onChange={props.handleChangeValue} 
          >
                   {props.tabOption.map((tab, index)=>{                       
                               return ( 
                                <div  key={index} >                         
                     <Tab   
                            label={tab.label}
                            onClick={()=>{props.handleChange(tab)}}
                            id={`simple-tabpanel-${index}`}
                            aria-controls={`vertical-tabpanel-${index}`}/>                                               
                           </div>                 
                              )
                                })
                                    }                             
            </Tabs>       
         </div>

    );
  }
  export default HelpTabs;