import React from 'react';
import Header from './Header/Header';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import TaskForm from './TaskForm/TaskForm';
 // import './MyTasksPage.css';


const MyTasksPage=()=>{

    const list_array=[
        {
          id: 'open',
          label:'open'
        },
      
        {
          id: 'inProgress',
          label:'inProgress'
        },
      
        {
          id: 'done',
          label:'done'
        }      
      ]

    return (
      
            <div className='MyTasksPage'>
               <NavigationMeniu />
               <Header />
               <TaskForm />  
                    
            </div>
            
    );
}

export default MyTasksPage;