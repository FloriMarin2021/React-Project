import React from 'react'
import Icon from '@mdi/react'
import { mdiAccount, mdiAccountSearch,  mdiAlarmCheck  } from '@mdi/js'
import "./Icons.css";
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import { useState, useEffect} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@mui/material/Slide";



function Icons(){ 
  
  const [showMessage, setShowMessage] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);

  const icons=[
      { 
     icon:mdiAccountSearch,     
     title: "Account Search",
     id: 0,
     color:"red"
       },       
      {  
        icon:mdiAccount,   
        title:"User Profile",
        id:1, 
        color:"blue"            
      },
     { 
       icon: mdiAlarmCheck,     
       title: "Alarm Check",
       id:2, 
       color:"green"          
      },      
    ];
 
  const handleClick=(idx)=>{            
     setCurrentIcon(idx);  
}

  const onClose = () => {   
    setShowMessage(false);
  };

  useEffect(() => {
    if(currentIcon!==null){          
    setShowMessage(true);
  } 
    
}, [currentIcon]);
 /* 
  const usePrevious = (currentIcon) => {    
    const ref = useRef();  
     useEffect(() => {
        ref.current=currentIcon          
        setShowMessage(true); 
        
  }, [currentIcon]);
     return ref.current;
  };

  const prevIcon = usePrevious(currentIcon);
  //console.log("PREVICON",prevIcon)
  //console.log("currentICON", currentIcon)
 */ 
  return ( 
    <div className='icons'>        
            <div className='icons_nav_menu'>
              <NavigationMeniu />
              </div>
                 <div  className='icons_menu' >                      
                     {icons.map((item, index)=>(
                        <div key={index}             
                             className={currentIcon === item.id ? "active" : ""} >
                         <Icon
                          path={item.icon}
                          title={item.title}
                          color={item.color}
                          index={index}
                          size={2} 
                          horizontal  
                          onClick={()=>handleClick(index)}                
                          />               
                   </div>           
                    ))}           
                </div>

                 <Snackbar
                       anchorOrigin={{ vertical: "top", horizontal: "left" }}
                       key={`top,center`}
                       open={showMessage}
                       TransitionComponent={Slide}
                       transitionDuration={{ enter: 1000, exit:2000 }}
                       autoHideDuration={3000}       
                       message={"icon changed"}
                       onClose={onClose}       
                   />                           
    </div>);
}

export default Icons;