import React from 'react';
//import MyTaskPage  from './MyTasksPage';


function TaskTable({tasks, deleteRow}){ 
  
  return(
    <div>      
     <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>           
        <tbody>           
            {tasks.map((task, index)=>{
              return (               
                <tr key={task.index}>
                    <td>{task.nr}</td>
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td>                                                           
                        <select> 
                          {task.status.map((item)=>{
                            return(
                              <option>{item.label}</option>
                            )
                          }) }                                                        
                        </select>                                                                 
                    </td>
                    <td >                  
                    {task.action.map((item2)=>{
                            return(
                              <button  key={item2} onClick={()=>deleteRow(index)}>{item2}</button>
                            )
                          })}                                     
                    </td>                    
                   </tr>              
               ) })}
        </tbody>                       
    </table>                              
   </div>
  );                       

   }



export default TaskTable;