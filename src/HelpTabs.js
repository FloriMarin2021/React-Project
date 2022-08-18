import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Help.css'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//   options={props.dataApi.data} 




 function HelpTabs(props) {
//console.log("props date", props)
 //console.log("props dataApi", props.dataApi.data)

    return (
        
      <div className='help_tabs'>        
        <Tabs className='help_tab'          
            aria-label={"Vertical tabs example"}
            orientation={"horizontal"}         
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
              
        { props.value===1?  <div >{props.dataApi.data?<Autocomplete
                     id="combo-box-demo"
                     options={props.dataApi.data}                     
                     getOptionLabel={(option) => option.employee_name}                
                     style={{ width: 300 }}
                     renderInput={(params) =>
                      <TextField {...params} label="Combo box" variant="outlined" />}

    />:null} </div>:null}
        {props.value===2? <div> item 3 </div>:null}    
       </div>
    );
  }
  export default HelpTabs;