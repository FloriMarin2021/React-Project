import './TaskForm.css';


const TaskForm=()=>{
    return (
        <div className='TaskForm'>               
             <form className="Form"> 

               <h1 className='FormHeader'>FORM</h1>

               <div className="FormDescription"> Description:       
               <input type="text"  className="FormDescriptionBtn"/>
               </div>

               <div className="FormDate"> Date:       
               <input type="text"  className="FormDateBtn"/>
               </div>

               <div className="FormNotes"> Notes:       
               <input type="text"  className="FormNotesBtn"/>
               </div>

               <div className='AddTask'>           
               <button  className='AddTaskBtn'> Add Task</button>
               </div>

             </form>
        </div>
        );
       
}

export default TaskForm
