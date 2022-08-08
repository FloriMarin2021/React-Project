import React from 'react';
import './Graph.css'; 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import {connect} from 'react-redux';
import { menuDisplay, fetchProductsRequest, fetchProductsSucces, fetchProductError } from './Actions/graph';
import axios from 'axios'


const baseURL =  "https://fakestoreapi.com/products";

class Graph extends React.Component {

handleChange(option){
 // console.log("option", option.id)
  this.props.menuDisplay(option);  
}

componentDidMount() {
  
 try{ 
 console.log("api request", this.props.fetchProductsRequest());
  axios.get(baseURL)
    .then(res => {
      const products = res.data;
      console.log("products", products)
      console.log("api products", this.props.fetchProductsSucces(products))
    })
 }
  
 catch(error){
  console.log("api error", this.props.fetchProductError(error))
 } 

}

  render(){
    return <div className='graph'>
              <div className='nav_menu'>               
                 <NavigationMeniu/> 
              </div>
              <div className='menu'>                   
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (                      
                   <React.Fragment>                                          
                      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                        Open Menu
                      </Button>
                      <Menu 
                       {...bindMenu(popupState)}>
                             {this.props.graphMenu.map((menu, index)=>{                       
                               return (                 
                          <MenuItem 
                           key={index} 
                           onClick={()=>{this.handleChange(menu); popupState.close()}}
                           value={menu.label}
                           >{menu.label} 
                           </MenuItem>                       
                              )
                                })
                                    }
                            </Menu> 
                    </React.Fragment>                                        
                        )}      
              </PopupState>
            </div>  
            <div>Afisare meniu :{this.props.displayMenu.label}</div>
                             
          </div> 
  }     
}


const mapStateToProps=(initialState)=>{
 
console.log("initial state", initialState)
console.log("MenuOptions", initialState.graphReducer)
 //const graphMenu=initialState.graphReducer
const displayMenu=initialState.graphReducer.displayMenu
console.log("display menu", displayMenu.label)
 
     return initialState.graphReducer
}


export default connect(
  mapStateToProps, {menuDisplay, fetchProductsSucces, fetchProductsRequest,fetchProductError},
 
  ) (Graph);


