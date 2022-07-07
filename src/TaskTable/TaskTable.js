import React from 'react';
//import MyTaskPage  from './MyTasksPage';
import './TaskTable.css';


function TaskTable({tasks, deleteRow,  showModal}){ 
  return( 
    <div className='modal' >  
     <div className='task-table'>          
      <table className='task-table_table'>
        <thead>
            <tr className='task-table_table_title'>
                <th className='task-table_table_title_id'>Id</th>
                <th className='task-table_table_title_descr'>Description</th>
                <th className='task-table_table_title_date'>Date</th>
                <th className='task-table_table_title_status'>Status</th>
                <th className='task-table_table_title_action'>Action</th>
            </tr>
        </thead>           
        <tbody className='task-table_table_body'>           
            {tasks.map((task, index)=>{
              return (               
                <tr key={task.index} className='task-table_table_body_content'>
                    <td className='task-table_table_content_nr'>{task.nr}</td>
                    <td className='task-table_table_content_descr'>{task.description}</td>
                    <td className='task-table_table_content_date'>{task.date}</td>
                    <td className='task-table_table_content_status'>                                                           
                        <select> 
                          {task.status.map((item)=>{
                            return(
                              <option>{item.label}</option>
                            )
                          }) }                                                        
                        </select>                                                                 
                    </td>
                    <td className='task-table_table_content_actions'>  
                      <button
                           onClick={()=> {showModal(task);}}                                                    
                           className='task-table_table_content_actions_btn_o'>                            
                      O</button>
                      <button
                           className='task-table_table_content_actions_btn_e' >E</button>                
                      <button
                           className='task-table_table_content_actions_btn_d'
                          
                           onClick={()=>deleteRow(index)}>D</button>                                                            
                    </td>                    
                   </tr>              
               ) })}
        </tbody>                       
    </table>
   </div>
   </div> 
  );
 }

export default TaskTable;