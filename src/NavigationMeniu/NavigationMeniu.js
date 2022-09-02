import './NavigationMeniu.css';
import Icon from '@mdi/react'
import {mdiHome,  mdiCheckboxMarkedCirclePlusOutline, mdiChartAreaspline, 
                  mdiHelpRhombusOutline,  mdiStarFace,  mdiMenu } from '@mdi/js'      
import { NavLink } from "react-router-dom";
import { useState } from "react";


const NavigationMeniu=()=>{

  const [isOpen, setIsOpen] = useState(true) 

  const handleOpen=()=>{ 
         setIsOpen(!isOpen)
        }

  const icons=[
    { 
   icon: mdiHome,     
   title: "Home",
   id: 0,
   color:"red", 
   link: "/"
     },       
    {  
      icon:mdiCheckboxMarkedCirclePlusOutline,   
      title:"My task page",
      id:1,
      color:"blue",
      link:"/mytaskspage"           
    },
   { 
     icon: mdiChartAreaspline,     
     title: "Graph",
     id:2, 
     color:"green",
     link:"/graph"         
    }, 
    { 
      icon: mdiHelpRhombusOutline ,     
      title: "Help",
      id:3, 
      color:"orange",
      link:"/help"         
     },
     { 
      icon: mdiStarFace ,     
      title: "Icons",
      id:4, 
      color:"black",
      link:"/icons"         
     },     
  ];

    return ( 
         <div >
          <div className='navigation_btn'>
                <button className='navigation_btn' onClick={handleOpen}>
                      <Icon path={mdiMenu}
                        title="User Profile"
                        size={2}
                        horizontal         
                        color="black"
                     />                                                      
                </button>             
              </div>          

      {isOpen? <div className="navigation_menu"  >                  
                 <button >{icons.map((item, index) =>{
                  return(
          <NavLink  className="nav_item"  key={index}  to={item.link} >                     
                 <span>
                       <Icon                     
                          path={item.icon}
                          title={item.title}
                          color={item.color}
                          index={index}
                          size={1} 
                          horizontal                                       
                          /> {item.title}</span>
                   </NavLink>
                   )
               })}
                  </button> 
               </div>:
        <div className="navigation_menu_closed">               
                <button>{icons.map((item, index) =>{
                  return (
                  <NavLink  className="nav_item" key={index}  to={item.link} >                     
                     <span>
                       <Icon
                          path={item.icon}
                          title={item.title}
                          color={item.color}
                          index={index}
                          size={1} 
                          horizontal                                       
                          />
                      </span>
                 </NavLink>
                 )
               })}
              </button> </div>}
             
          </div>                
                );
            }

export default NavigationMeniu
    



