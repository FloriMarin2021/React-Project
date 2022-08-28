import React from 'react'
import Icon from '@mdi/react'
import { mdiAccount, mdiAccountSearch,  mdiAlarmCheck  } from '@mdi/js'
import "./Icons.css";
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import { useState, useEffect, useRef} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@mui/material/Slide";

function Icons(){ 
  
  const [showMessage, setShowMessage] = useState(true);
  const [currentIcon, setCurrentIcon] = useState(null);

  const [icons] =  useState([
      {      
     icon: "Account Search",
      id: 0 
       },       
      {      
        icon:"User Profile",
        id:1             
      },
     {      
       icon: "Alarm Check",
       id:2          
      },      
  ]);

  const handleClick=(idx)=>{
      // console.log("CURENTicons", currentIcon)
     //  console.log("idx", idx)  
     setCurrentIcon(idx);  
}

  const onClose = () => {   
    setShowMessage(false);
  };
  
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
  
  return ( 
    <div className='icons'>        
            <div className='icons_nav_menu'>
              <NavigationMeniu />
              </div>
                 <div  className='icons_menu' >                      
                     {icons.map((item, index)=>(
                        <div key={index}             
                         className={currentIcon === item.id ? "active" : ""} >
       {item.id===0? <Icon path={mdiAccountSearch}
                      title="Account Search"
                      index={0}
                      size={2} 
                      horizontal  
                      onClick={()=>handleClick(index)}                
               />
                 :null}
       {item.id===1? <Icon path={mdiAccount}
                      title="User Profile"
                      size={2}
                      horizontal      
                      color="red"
                      index={1}
                      onClick={()=>handleClick(index)}
                     />:null}
       {item.id===2?  <Icon path={ mdiAlarmCheck }
                    title="Alarm Check"
                     size={2} 
                     color="blue"
                     horizontal
                     index={2}
                     onClick={()=>handleClick(index)}
               />:null}           
               </div>           
                 ))}           
            </div>
            {(currentIcon===0||currentIcon===1||currentIcon===2)&&prevIcon!==null?
                 <Snackbar
                       anchorOrigin={{ vertical: "top", horizontal: "left" }}
                       key={`top,center`}
                       open={showMessage}
                       TransitionComponent={Slide}
                       transitionDuration={{ enter: 1000, exit:2000 }}
                       autoHideDuration={3000}       
                       message={"icon changed"}
                       onClose={onClose}       
                   /> :null }                          
    </div>);
}

export default Icons;