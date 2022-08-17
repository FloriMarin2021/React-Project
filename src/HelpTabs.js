import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Help.css'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



 function HelpTabs(props) {
 //console.log("props date", props.date)

    return (
        
      <div className='help_tabs'>        
        <Tabs className='help_tab'          
            aria-label={"Vertical tabs example"}
            orientation={"vertical"}         
            scrollButtons={'on'}
            variant={"scrollable"}          
            value={props.value}
            onChange={(event, value)=>props.handleChangeValue(event, value)} 
          >
                   {props.tabOption.map((tab, index)=>{                       
                               return (                                                               
                     <Tab   key={index}                          
                            id={`simple-tabpanel-${index}`}
                            aria-controls={`vertical-tabpanel-${index}`}
                            aria-labelledby={`simple-tab-${index}`}
                            label={tab.label}                                                   
                       />                                                 
                              )                             
                                })                                 
                                    }                                                                 
            </Tabs>
      
        { props.value===0?      
          <DatePicker
                    selected={props.date }
                    onChange={props.handleCalendarChange}
                    value={props.date}               
                    dateFormat="MMMM d, yyyy h:mm aa"                 
                    showTimeInput
                    shouldCloseOnSelect={true}                                     
                      />
            
        :null}           
        { props.value===1? <div>Item Two </div>:null}
        {props.value===2? <div> Item Three </div>:null}    
       </div>
    );
  }
  export default HelpTabs;