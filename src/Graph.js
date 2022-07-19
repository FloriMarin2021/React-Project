import React from 'react';
import { Link } from "react-router-dom";


function Graph () {
    return <div>
                 <h2>Graph text</h2> 
                   <ul>
                     <li><Link to="/home">Home</Link></li> 
                     <li><Link to="/help">Help</Link></li>
                     <li><Link to="/mytaskspage">My tasks</Link></li> 
                   </ul>   
          </div>
}
export default Graph;