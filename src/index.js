import React from 'react';
import ReactDOM from 'react-dom';
import MyTasksPage from './MyTasksPage';


const App=()=>{
           
        return ( 
        <div>
           <MyTasksPage/>
        </div>
        );
    }    
    
      
ReactDOM.render(<App/>, document.getElementById('root'));