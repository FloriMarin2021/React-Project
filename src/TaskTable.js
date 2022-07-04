import React from 'react';
//import MyTaskPage  from './MyTasksPage';


function TaskTable({tasks, deleteRow}){ 
  
  return(
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
            {tasks.map((task)=>{
              return (               
                <tr >
                    <td>{task.nr}</td>
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td>                                                           
                        <select> 
                          {task.status.map((item)=>{
                            return(
                              <option>{item.label}</option>
                            )
                          })}                                                         
                        </select>                                                                 
                    </td>
                    <td >                  
                    {task.action.map((item2, i)=>{
                            return(
                              <button  key={item2} onClick={()=>deleteRow(i)}>{item2}{i}</button>
                            )
                          })}                                     
                    </td> 
                   </tr>              
               ) })}
        </tbody>                       
    </table>                              
   </div>
  );                       

   }


/*<td > 
                    {task.action.map((item2, index)=>{ 
                                                             
                          return(                                                         
                          <button key={index} >
                            {item2}</button>                                                                                                    
                            );                    
                          })                           
                        }                                                    
                    </td>  */

/*{ 

     const taskList=tasks.map((task, index)=>{
       return(
            <div>
           <div>{task.nr}</div>
           <div>{task.description}</div>
           <div>
           {task.status.map((item, i)=>
           {
            return (
              <div>
            <div>{item.label}</div>
            <div>{item.id}</div>
            </div>
            )
           })}
       
       </div>
       </div>
      ) 
      
     })   
    
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
              </table>
        {taskList}      
          </div>);
          }  
      
          /*
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
           
               
                      <tr key={index}>
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
                
              </tbody>
          </table>
          
         
           ))}
           */
     

  


 /*
  updateMessage(event) {
    this.setState({
     
    });
  }
 

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render(){       
        return (
          <div>
           
    );
  }

  /*</div>
    render(){       
          
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
                 
                        {tasks.map((task, index)=>(
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
 */  

export default TaskTable;