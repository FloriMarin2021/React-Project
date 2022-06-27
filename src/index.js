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
    
    
    
//take the react component and show it on the screen    
ReactDOM.render(<App/>, document.getElementById('root'));