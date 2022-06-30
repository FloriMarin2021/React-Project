import React from 'react';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import Header from './Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskTable from './TaskTable';
import Table from './Table';


class MyTasksPage extends React.Component{ 

   render() {
       return (
        <div className='MyTasksPage'>
           <NavigationMeniu />
           <Header />
           <TaskForm />  
           <TaskTable/>   
           <Table/>                
        </div>   
       );
   }
}


export default MyTasksPage;