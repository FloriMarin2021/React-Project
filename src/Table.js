import React from "react";
       
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

const Table=()=>{
    const [list, setList] = React.useState(myTasks);           
    function handleRemove (id){
            const newList=list.filter((item)=>item.id!==id);
            setList(newList); }

            return (
              <List list={list} onRemove={handleRemove}/>
                    );
            }


          
const List=({list, onRemove})=>( 
  <div>       
    <table> 
      <tr>
         <th>Id </th>
         <th>Description</th>
         <th>Date</th>
         <th>Status</th>
         <th>Action</th>
       </tr>     
    </table> 
       {list.map((item)=>(<Item item={item} onRemove={onRemove}/>))}
    </div>
  
)                                                 
 
const Item =({item, onRemove})=>(           
       <table className='table2'>              
          <tr key={item}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>                                                            
                  <select>                                   
                    <option>{item.status[0]}</option>
                    <option>{item.status[1]}</option>
                    <option>{item.status[2]}</option>                                    
                  </select>                                                                 
                </td>
                <td >                                   
                   <button>{item.action[0]}</button>
                   <button>{item.action[1]}</button>
                   <button onClick={() =>onRemove(item.id)}>{item.action[2]}</button>                                     
                </td>                                                              
          </tr>       
     </table>  
              )
export default Table
               