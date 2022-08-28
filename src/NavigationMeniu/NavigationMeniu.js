import './NavigationMeniu.css';
import { Link } from "react-router-dom";


const NavigationMeniu=()=>{

    return (
      <div className='navigation-menu'>            
        <button><Link to="/home">Home</Link></button>
        <button> <Link to="/mytaskspage">My tasks</Link></button>          
        <button><Link to="/graph">Graph</Link></button>           
        <button><Link to="/help">Help</Link></button> 
        <button><Link to="/icons">Icons</Link></button>         
      </div>
    );
}


export default NavigationMeniu
    



