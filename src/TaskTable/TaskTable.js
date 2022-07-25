import React from 'react';
import './TaskTable.css'; 
 


function TaskTable({tasks, deleteRow, showModal, handleClick, handleStatus}){
   
  return(  
   <div className='task-table'>               
       <table className='task-table_table'>
         <thead>
            <tr className='task-table_table_title'>
                <th className='task-table_table_title_id'>Id</th>
                <th className='task-table_table_title_descr'>Description</th>
                <th className='task-table_table_title_date'>Date</th>
                <th className='task-table_table_title_date'>Priority</th>
                <th className='task-table_table_title_status'>Status</th>
                <th className='task-table_table_title_action'>Action</th>
            </tr>
        </thead>           
        <tbody className='task-table_table_body'         > 
                    {tasks.map((task, index)=>{
              return (               
                <tr  key={'task'+index} className='task-table_table_body_content'>
                    <td   style={{ textDecoration:(task.currentStatus.id==='done')?'line-through':'none',            
                          color:(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray',
                          color:(task.currentStatus.id==='done')?'green':(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray'}} 

                     className='task-table_table_content_nr'>{task.nr}</td>
                                       <td style={{ textDecoration:(task.currentStatus.id==='done')?'line-through':'none',            
                     color:(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray',
                     color:(task.currentStatus.id==='done')?'green':(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray'}}
                                       className='task-table_table_content_descr'>{task.description}</td>
                   <td  style={{ textDecoration:(task.currentStatus.id==='done')?'line-through':'none',            
                     color:(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray',
                     color:(task.currentStatus.id==='done')?'green':(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray'}}
                    className='task-table_table_content_date'>{task.date}</td>
                    <td style={{ textDecoration:(task.currentStatus.id==='done')?'line-through':'none',            
                     color:(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray',
                     color:(task.currentStatus.id==='done')?'green':(task.priority==='critical')? 'red':task.priority==='major'?'orange':'gray'}}
                    className='task-table_table_content_priority'>{task.priority}</td>
                    <td className='task-table_table_content_status'> 
                    <select                   
                       name='id'
                       value={task.currentStatus.id} 
                       onChange={(event)=> {handleStatus(event, index)}}                                                         
                                             >                                                                          
                        {task.status.map((item, i)=>{                          
                            return(                             
                              <option                         
                              key={i}
                              index= {index}
                              value={item.id}                                               
                              >{item.label}</option>                           
                            )
                          }) }                                                                               
                        </select>                                                                               
                    </td>
                    <td className='task-table_table_content_actions'>  
                      <button
                           onClick={()=> {showModal(task)}}                                                    
                           className='task-table_table_content_actions_btn_o'>                            
                      O</button>                       
                     <button className='task-table_table_content_actions_btn_e'
                       onClick={()=> {handleClick(task)}}  
                        > Edit</button>                    
                      <button
                           className='task-table_table_content_actions_btn_d'                          
                           onClick={()=>deleteRow(index)}>D</button>                                                            
                    </td>                    
                   </tr>                              
              )  })}        
          </tbody> 
       </table>     
  </div>
  );    
 }

export default TaskTable;