import './TaskForm.css';


function TaskForm({ isHideForm, newRows,  addEditRow, handleClick, handleAddChange}){
    
    if (isHideForm) {
        return null;
     } 

    return (       
        <div className='task-form'>                      
             <form className="task-form_forms">
                 <button  className='btn-hide' onClick={handleClick} >X</button>
                <h1  className='task-form_forms_header'>FORM</h1> 
             
                                      
                  <div className="task-form_forms_describe"> Description:       
                   <input type="text"  className="task-form_forms_describe_btn"                   
                                name='description'
                                value={newRows.description}                 
                                onChange={handleAddChange}  />                                        
               </div>
               <div className="task-form_forms_date"> Date:       
                   <input type="text"  className="task-form_forms_date_btn"
                                name='date'
                                value={newRows.date}  
                                onChange={handleAddChange}   />
               </div>
               <div className="task-form_forms_notes"> Notes:       
                   <input type="text"  className="task-form_forms_notes_btn"
                                name='notes'
                                value={newRows.notes}  
                                onChange={handleAddChange}  />                      
               </div>
               <div className='task-form_forms_add'>           
                   <button  className="task-form_forms_add_btn"
                       type='submit'                   
                       onClick={addEditRow}
                                > Save Task</button>
               </div>           
        </form>          
    </div>         
        );             
}

export default TaskForm