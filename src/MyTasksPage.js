import React from 'react';
import Header from './Header/Header';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import TaskForm from './TaskForm/TaskForm';
//import './MyTasksPage.css';

class MyTasksPage extends React.Component{
  constructor(props){
    super(props);

    this.state={
      myTasks:[
        {
          id: 'open',
          label:'open'
        }, 

        {
          id: 'in progress',
          label:'in progress'
        },

        {
          id: 'done',
          label:'done'
        } 
          
      ],
        };
  }

   render() {
       return (
        <div className='MyTasksPage'>
           <NavigationMeniu title='first item'/>
           <Header />
           <TaskForm />                     
        </div>   
       );
   }
}
   

export default MyTasksPage;