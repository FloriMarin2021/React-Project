import React from 'react';
import './Graph.css'; 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import {connect} from 'react-redux';
import { menuDisplay, fetchProductsRequest, 
        fetchProductsSucces, fetchProductError, hideGraphOne, hideGraphTwo} from './Actions/graph';
import axios from 'axios'
import{ LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


const baseURL =  "https://fakestoreapi.com/products";

class Graph extends React.Component {

handleChange(option){
 // console.log("option", option.id)
  this.props.menuDisplay(option);  
}

async componentDidMount() {  
 try{ 
  this.props.fetchProductsRequest();

  await axios.get(baseURL)
    .then(res => {
      const products = res.data;
     // console.log("products", products)      
      this.props.fetchProductsSucces(products);
    })
 }
  
 catch(error){
  this.props.fetchProductError(error);
 } 
}

appearGraph= ()=> { 
    if(this.props.displayMenu.id==='bars'){
          this.props.hideGraphOne();
        }
    else{
         this.props.hideGraphTwo();
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
                           onClick={()=>{this.handleChange(menu); popupState.close(); this.appearGraph()}}
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
      {!this.props.isHideGraph_One&&<LineChart
      width={500}
      height={300}
      data={this.props.products}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />      
    </LineChart> 
  }
    {!this.props.isHideGraph_Two&&<LineChart
      width={500}
      height={300}
      data={this.props.products}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="rating.count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />      
    </LineChart> }                          
            </div>          
          
  }     
}


const mapStateToProps=(initialState)=>{
 
//console.log("initial state", initialState)
//console.log("MenuOptions", initialState.graphReducer)
//const graphMenu=initialState.graphReducer
//const displayMenu=initialState.graphReducer.displayMenu
//console.log("display menu", displayMenu)
//const products=initialState.graphReducer.products
//console.log("products price", products)
//const isHideGraph=initialState.graphReducer.isHideGraph
//console.log("is hide graph", isHideGraph)
 
     return initialState.graphReducer
}


export default connect(
  mapStateToProps, {menuDisplay, fetchProductsSucces, 
    fetchProductsRequest,fetchProductError, hideGraphOne, hideGraphTwo},
 
  ) (Graph);


