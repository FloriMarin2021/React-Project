import React from 'react';

class TaskTable extends React.Component{ 
     
    render(){       
        var  myTasks=[
            {
              id: '1',
              description:'task nr 1',
              date:'22.12.2022',
              status:['open', 'done', 'in progress'],
              action: ['o', 'e', 'd']
            }, 
    
            {
              id: '2',
              description:'task nr 2',
              date:'10.05.2021',
              status:['open', 'done', 'in progress'],
              action: ['o', 'e', 'd']
            },
    
            {
              id: '3',
              description:'task nr 3',
              date:'14.03.2020',
              status:['open', 'done', 'in progress'],
              action: ['o', 'e', 'd']
            }                
          ];   
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        {myTasks.map((task, index)=>(
                            <tr key={index}>
                                <td>{task.id}</td>
                                <td>{task.description}</td>
                                <td>{task.date}</td>
                                <td>                                                            
                                    <select>                                   
                                            <option>{task.status[0]}</option>
                                            <option>{task.status[1]}</option>
                                            <option>{task.status[2]}</option>                                    
                                    </select>                                                                 
                                </td>
                                <td >                                   
                                    <button>{task.action[0]}</button>
                                    <button>{task.action[1]}</button>
                                    <button >{task.action[2]}</button>                                     
                                </td>                                                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}     
   


export default TaskTable;