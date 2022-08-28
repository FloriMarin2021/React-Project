import React from 'react';
import MyTasksPage from './MyTasksPage';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Help from './Help';
import Graph from './Graph';
import Icons from './Icons';
import { Provider } from 'react-redux';
import store from './store';


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
          <Route path="icons" element={<Icons/>} />      
        </Routes>
    </BrowserRouter>   
   </div>
  );
}   
    
      
ReactDOM.render(<Provider store={store}>
                 <App/>
                </Provider> , document.getElementById('root'));