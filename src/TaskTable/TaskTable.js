import React from 'react';
//import MyTaskPage  from './MyTasksPage';
import './TaskTable.css';   



function TaskTable({tasks, newRows, deleteRow, 
      showModal, handleChange, addRow, showRow, displayForm, hideComponent, hideTabel}){ 
 
  
  return(  
  <div>
    <button  className='btn-hide' onClick={() => hideComponent(hideTabel)} >X</button> 

       {hideTabel ? (
        
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
        <tbody className='task-table_table_body'
         > 
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
                      {displayForm ? (
             <div>
                     <input 
                       className='input_nr'
                       type="text"
                       name='nr'
                       value={newRows.nr}                 
                       onChange={handleChange}  
                       /> 
                    <input 
                       className='task-table_table_content_descr'
                       type="text"
                       name='description'
                       value={newRows.description}               
                       onChange={handleChange}  
                     />  
                     <input 
                       className='task-table_table_content_date' 
                       type='text '
                       name='date'
                       value={newRows.date}                  
                       onChange={handleChange}  
                        />                                                                              
                     <input
                        className='task-table_table_content_status'
                        type='text'
                        name='status'
                        value={newRows.status}
                        onChange={handleChange}                    
                        /> 
                    <input
                        className='task-table_table_content_status'
                        type='text'
                        name='action'
                        value={newRows.action}
                        onChange={handleChange}                        
                        />                                                                                         
                   <button
                      type='submit'
                      onClick={addRow}
                      disabled={
             !newRows.nr || !newRows.description ||!newRows.date ||!newRows.status||!newRows.action
                                     }                  
                    >create row</button>         
        </div>
         ) : (
                      <button                       
                             className='task-table_table_content_actions_btn_e' 
                             onClick={() => showRow(!displayForm)}  >
                             Edit</button>                  
                         )}                 
                           
                      <button
                           className='task-table_table_content_actions_btn_d'                          
                           onClick={()=>deleteRow(index)}>D</button>                                                            
                    </td>                    
                   </tr>                              
              )  })}        
          </tbody> 
     </table> 
     {displayForm ? (
             <div>
                     <input 
                       className='input_nr'
                       type="text"
                       name='nr'
                       value={newRows.nr}                 
                       onChange={handleChange}                        
                       /> 
                     <input 
                       className='task-table_table_content_descr'
                       type="text"
                       name='description'
                       value={newRows.description}               
                       onChange={handleChange} 
                       />  
                     <input 
                       className='task-table_table_content_date' 
                       type='text '
                       name='date'
                       value={newRows.date}                  
                       onChange={handleChange} 
                        />                                                                              
                     <input
                        className='task-table_table_content_status'
                        type='text'
                        name='status'
                        value={newRows.status}
                        onChange={handleChange}                      
                        /> 
                    <input
                        className='task-table_table_content_status'
                        type='text'
                        name='action'
                        value={newRows.action}
                        onChange={handleChange}                       
                        />                                                                                         
                   <button
                      type='submit'
                      onClick={addRow} 
                       disabled={
     !newRows.nr ||!newRows.description||!newRows.date||!newRows.status||!newRows.action
                    }                                   
                    >Add </button>         
        </div>
         ) : (
          <button onClick={() => showRow(!displayForm)} className="addRow">
            Add Row 
          </button>
        )}
     </div>     
   </div>
) : (
         <div></div>
)}
  </div>
  );    
 }

export default TaskTable;