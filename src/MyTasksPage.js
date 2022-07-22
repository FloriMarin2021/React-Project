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
             status:[ { id: 'open', label:'open' },
                      { id: 'in progress', label:'in progress'},
                      {  id: 'done', label:'done' }
                    ],
             notes: 'notite 1'
           },     
           {
             nr: 2,
             description:'task nr 2',
             date:'10.05.2021',
             status:[ { id:'open', label:'open' },
                      { id: 'in progress', label:'in progress'},
                      {  id: 'done', label:'done' }
                    ],
             notes: 'notite 2'
           },    
           {
            nr: 3,
             description:'task nr 3',
             date:'14.03.2020',
             status:[ { id: 'open', label:'open' },
                      { id: 'in progress', label:'in progress'},
                      {  id: 'done', label:'done' }
                    ],
             notes: 'notite 3'
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

          currentStatus:"",
          countDone:0,
          countProgress:0,
          countOpen:0,
          styles:{
            color:"black",
            textDecoration:""
          }, 
       
             }                               
    } 
    
colorClick=()=>{
      this.setState({
          styles:{
            color:"green",
            textDecoration:"line-through"
        }
      })
    }
    
addProgress=()=>{
  this.setState({
    countProgress:this.state.countProgress+1,
    countOpen:this.state.countOpen-1
  })
}

addDone=()=>{ 
  this.setState({countDone:this.state.countDone+1,
                countProgress:this.state.countProgress-1,
                })
}

addOpen=()=>{
  this.setState({      
     countOpen: this.state.countOpen+1 
    })
}


handleStatus= (event) => {
   console.log("valoare event", event.target.value) 
     if(event.target.value==='open'){
        this.addOpen();
       } 
    else if(event.target.value==='done') {
      this.addDone();
      this.colorClick();
      
    }
    else if(event.target.value==='in progress'){
      this.addProgress();
    } 
        this.setState(
       {       
        currentStatus:event.target.value,
        } ) 
      }

  
 
  
    //  this.setState({tasks:newTasks})
  
     /* const tasks=this.state.tasks
     const newRows=this.state.newRows
      const index=tasks.findIndex(task => task.nr===newRows.nr);
     tasks[index]=newRows;
           this.setState((tasks) => {           
                return tasks;      
               })
  
      tasks.map((item, index)=>{
       console.log("index", index);      
      })
    //  console.log("new rows number", newRows.nr); 
    //  console.log("tasks", tasks);
    //  console.log("task22", tasks[newRows.nr-1])    
    //  console.log("index2", index2)    
    // const index = tasks.find(task => task.nr === newRows.nr);
    //  console.log("index", index)
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
  console.log('curent status', newRows)
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

    this.setState({tasks:newTasks})

   /* const tasks=this.state.tasks
   const newRows=this.state.newRows
    const index=tasks.findIndex(task => task.nr===newRows.nr);
   tasks[index]=newRows;
         this.setState((tasks) => {           
              return tasks;      
             })

    tasks.map((item, index)=>{
     console.log("index", index);      
    })
  //  console.log("new rows number", newRows.nr); 
  //  console.log("tasks", tasks);
  //  console.log("task22", tasks[newRows.nr-1])    
  //  console.log("index2", index2)    
  // const index = tasks.find(task => task.nr === newRows.nr);
  //  console.log("index", index)
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
       return ( 
        
          <div className='my-task-page'> 
         
               <div   className='create-new'>
                  <div className='status'>
                   <div
                   className='status_open'>Open: {this.state.countOpen}</div>                   
                   <div 
                    className='status_progress'>In progress:{this.state.countProgress} </div>
                   <div className='status_done'>Done: {this.state.countDone}</div> 
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
                     styles={this.state.styles}
                     colorClick={this.colorClick}
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