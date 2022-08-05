import React from 'react';
import MyTasksPage from './MyTasksPage';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Help from './Help';
import Graph from './Graph';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';



const App=()=>{
           
  return (
    <div> 
     <BrowserRouter> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="mytaskspage" element={<MyTasksPage/>}/>
          <Route path="graph" element={<Graph />} />
          <Route path="home" element={<Home />} />
          <Route path="help" element={<Help/>} />      
        </Routes>
    </BrowserRouter>   
   </div>
  );
}   
    
      
ReactDOM.render(<Provider store={createStore(reducers)}>
                 <App/>
                </Provider> , document.getElementById('root'));