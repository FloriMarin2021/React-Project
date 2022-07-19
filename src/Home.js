import React from 'react';
import {Link} from "react-router-dom";


function Home () {
    return  <div>
               <h2>home page</h2>
                  <ul>
                    <li><Link to="/help">Help</Link></li> 
                    <li><Link to="/graph">Graph</Link></li>
                    <li><Link to="/mytaskspage">My tasks</Link></li> 
                  </ul>        
            </div>
}
export default Home;