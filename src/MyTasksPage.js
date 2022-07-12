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
             nr: '1',
             description:'task nr 1',
             date:'22.12.2022',
             status:[ { id: 'open', label:'open' },
                      { id: 'in progress', label:'in progress'},
                      {  id: 'done', label:'done' }
                    ],
             notes: 'notite 1'
           },     
           {
             nr: '2',
             description:'task nr 2',
             date:'10.05.2021',
             status:[ { id:'open', label:'open' },
                      { id: 'inprogress', label:'inprogress'},
                      {  id: 'done', label:'done' }
                    ],
             notes: 'notite 2'
           },    
           {
            nr: '3',
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

        displayForm: true,
        hideForm:true,            
        }   
    }

hideComponent= ()=> {
      this.setState({
        hideForm: this.hideForm      
             });
    }; 

showRow= ()=> {
      this.setState({
        displayForm: !this.displayForm        
             });
    };
 
addRow = () => {
  
  this.setState(({ newRows, tasks }) => {
    console.log("new rows", newRows);
    return {
      tasks: [...tasks, { 
        ...newRows,
        status: [ { id: 'open', label:'open' },
        { id: 'in progress', label:'in progress'},
        {  id: 'done', label:'done' }
      ],
       id: tasks.length+1
       }],
      newRows: {
          nr:'',                 
          description:newRows.description,
          date:'',
          status:'',
          notes:''
          }         
    }   
  })
  
    }; 
  

handleChange= (event) => { 
  event.preventDefault();
 
     const fieldName = event.target.getAttribute("name");
     const fieldValue = event.target.value;     
     const newRows={...this.state.newRows}
     newRows[fieldName] = fieldValue; 

         this.setState(
          { newRows: { ...newRows, 
           [fieldName]:fieldValue}})      
  } 
  
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
       
          <NavigationMeniu className='navigation-menu' />
          <Header className='header'/>       
          <TaskTable className='task-table' 
                     tasks={this.state.tasks} 
                     deleteRow={this.deleteRow} 
                     showModal={this.showModal}
                     isModalVisible={this.state.isModalVisible}
                     onClose={this.showModal}
                     openedTask={this.state.openedTask}                    
                     displayForm={this.state.displayForm}
                     showRow={this.showRow}
                     newRows={this.state.newRows}
                     addRow={this.addRow}
                     handleChange={this.handleChange}              
                     />
          <Modal 
           openedTask={this.state.openedTask}
           onClose={this.showModal}           
           isModalVisible={this.state.isModalVisible} />

           <TaskForm className='task-form'
                     hideForm={this.state.hideForm}     
                     hideComponent={this.hideComponent} 
                     displayForm={this.state.displayForm}
                     showRow={this.showRow}
                     newRows={this.state.newRows}
                     addRow={this.addRow}
                     handleChange={this.handleChange}
                     tasks={this.state.tasks} />                                
        </div>           
       );
   }
}


export default MyTasksPage;