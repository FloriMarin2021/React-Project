import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Help.css'; 


 function HelpTabs(props) {
    
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
                                                      
                     <Tab   key={index}
                            hidden={props.value === index}
                            value={props.value}
                            label={tab.label}
                            onClick={()=>{props.handleChange(tab)}}
                            id={`simple-tabpanel-${index}`}
                            aria-controls={`vertical-tabpanel-${index}`}/>                            
                              )                             
                                })                                 
                                    } 
                                                                
            </Tabs>               
           </div>

    );
  }
  export default HelpTabs;