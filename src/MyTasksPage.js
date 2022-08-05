import React from 'react';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import Header from './Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskTable from './TaskTable/TaskTable';
import './MyTasksPage.css';
import Modal from './Modal/Modal';

class MyTasksPage extends React.Component{ 
   constructor(props) {
      super(props); 
      this.state = {
        tasks: [
         {
             nr: 1,
             description:'task nr 1',
             date:'22.12.2022',
             status:[ { id: 'open', label:'Open' },
                      { id: 'inProgress', label:'In Progress'},
                      {  id: 'done', label:'done' }
                    ],
            currentStatus:{ id:'open', label:'open' },             
            notes: 'notite 1',
            priority:"minor"
           },     
           {
             nr: 2,
             description:'task nr 2',
             date:'10.05.2021',
             status:[ { id:'open', label:'Open' },
                      { id: 'inProgress', label:'In Progress'},
                      {  id: 'done', label:'done' }
                    ],
            currentStatus:{ id: 'open', label:'open' },
             notes: 'notite 2',
             priority:"critical"
           },    
           {
             nr: 3,
             description:'task nr 3',
             date:'14.03.2020',
             status:[ { id: 'open', label:'Open' },
                      { id: 'inProgress', label:'In Progress'},
                      {  id: 'done', label:'done' }
                    ],
             currentStatus:{ id:'open', label:'open' },
             notes: 'notite 3',
             priority:'major'
           }
                 
        ] ,

        isModalVisible: false,
        openedTask:"",
        
        newRows:{ 
          nr:'',                 
          description:'',
          date:'',
          status:'',
          notes:''
                   },

          isHideForm:true,       
             }                               
    } 


handleStatus= (event, index) => {
const newCurrentStatusId=event.target.value

const updatedTasks=this.state.tasks.map((task, idx)=>{
if(index===idx){
  const updatedTasks={
    ...task, //o copie de task
    currentStatus:{
      id:newCurrentStatusId,
      label: task.status.find((s)=>s.id===newCurrentStatusId).label
    }
  }
  return updatedTasks;
}
else {
  return task;
}
})
this.setState({tasks:updatedTasks})
}
/*
 const newStatus=this.state.tasks.map((task, idx)=>{ 
   if(index===idx){   
      if(event.target.value!==task.currentStatus.id){      
          task.currentStatus.id=event.target.value                      
          task.currentStatus.label=event.target.value
            return {...this.state.tasks[index], currentStatus:task.currentStatus}
        }
    else {
        return this.state.tasks[index]
      }      
      }   
   return task
 })  

   this.setState({...this.state.tasks,
                   currentStatus:newStatus})
*/


handleClick= (task)=> { 
      this.setState({
        isHideForm: !this.state.isHideForm,
        newRows:task     
      }); 
}

handleAddChange= (event) => {    
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;     
  const newRows={...this.state.newRows}
  newRows[fieldName] = fieldValue; 
  console.log('new rows', newRows)
      this.setState(
       {
        newRows:{...newRows,
        [fieldName]:fieldValue}
        })   
} 

addEditRow= (e) => {
    e.preventDefault();

    const newTasks=this.state.tasks.map((task=>{
      if(task.nr===this.state.newRows.nr){
        console.log("task nr", task.status)
        return this.state.newRows;
      }
      else {
        return task;
      }
    }))
console.log("new tasks", newTasks)
    this.setState({tasks:newTasks})

   /* const tasks=this.state.tasks
   const newRows=this.state.newRows
    const index=tasks.findIndex(task => task.nr===newRows.nr);
   tasks[index]=newRows;
         this.setState((tasks) => {           
              return tasks;      
             })
*/
    
  };           
   
addRow= (event) => {
  event.preventDefault();
  
  this.setState(({ newRows, tasks }) => {
    console.log("new rows", newRows);
    return {
      tasks: [...tasks, { 
        ...newRows,
        status: [ { id: 'open', label:'open' },
        { id: 'in progress', label:'in progress'},
        {  id: 'done', label:'done' }
      ],
       nr: tasks.length+1
       }],
      newRows: {
          nr:'',                 
          description:'',
          date:'',
          status:'',
          notes:''
          }                
    }   
  })  
    }; 
  
showModal = (task)=> {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
        openedTask: task,
             });
    }; 
         
deleteRow=(idx)=>{
     this.setState({
      tasks: this.state.tasks.filter((task, index)=>{
        return index!==idx;       
      })
     })         
    }  

   render() { 
    const open=this.state.tasks.filter(task=>{      
      return task.currentStatus.id==='open'        
    })
    const openStatus=open.length   

    const progress=this.state.tasks.filter(task=>{      
      return task.currentStatus.id==='inProgress'        
    })
    const progressStatus=progress.length   

    const done=this.state.tasks.filter(task=>{      
      return task.currentStatus.id==='done'        
    })
    const doneStatus=done.length  
   
       return (        
          <div className='my-task-page'>         
               <div   className='create-new'>
                  <div className='status'>
                   <div
                   className='status_open'>Open:{openStatus}</div>                   
                   <div 
                    className='status_progress'>In progress:{progressStatus}</div>
                   <div className='status_done'>Done:{doneStatus}</div> 
                  </div > 
                  <div className='create'>         
                     <button className='create-btn'  onClick={this.handleClick}>             
                      Create new
                      </button> 
                  </div>                               
                </div>        
                        
          <NavigationMeniu className='navigation-menu' />
          <Header className='header'/>       
          <TaskTable className='task-table' 
                     tasks={this.state.tasks} 
                     deleteRow={this.deleteRow} 
                     showModal={this.showModal}
                     isModalVisible={this.state.isModalVisible}
                     onClose={this.showModal}
                     openedTask={this.state.openedTask}             
                     newRows={this.state.newRows}
                     addRow={this.addRow}
                     handleClick={this.handleClick}
                     handleStatus={this.handleStatus}
                     currentStatus={this.state.currentStatus}
                                 />

          <Modal     className='modal'
                     openedTask={this.state.openedTask}
                     onClose={this.showModal}           
                     isModalVisible={this.state.isModalVisible} />
                  
          <TaskForm className='task-form'
                     isHideForm={this.state.isHideForm}               
                     newRows={this.state.newRows}
                     addRow={this.addRow}
                     handleAddChange={this.handleAddChange}
                     tasks={this.state.tasks}                                        
                     addEditRow={this.addEditRow}
                     handleClick={this.handleClick}           
                     /> 
          
         </div> 
            
       );
   }
}
  
  

export default MyTasksPage;