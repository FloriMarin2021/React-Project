import './TaskForm.css';


const TaskForm=()=>{
    return (
        <div className='task-form'>               
            <form className="task-form_forms">
               <h1 className='task-form_forms_header'>FORM</h1>
               <div className="task-form_forms_describe"> Description:       
                   <input type="text"  className="task-form_forms_describe_btn"/>
               </div>
               <div className="task-form_forms_date"> Date:       
                   <input type="text"  className="task-form_forms_date_btn"/>
               </div>
               <div className="task-form_forms_notes"> Notes:       
                   <input type="text"  className="task-form_forms_notes_btn"/>
               </div>
               <div className='task-form_forms_add'>           
                   <button  className="task-form_forms_add_btn"> Add Task</button>
               </div>
            </form>
        </div>
        );       
}

export default TaskForm
