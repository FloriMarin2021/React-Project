import React from 'react';
import './Graph.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import {connect} from 'react-redux';
import { menuDisplay, fetchProductsRequest, 
        fetchProductsSucces, fetchProductError, hideGraphOne, hideGraphTwo} from './Actions/graph';
import axios from 'axios'
import GraphMenu from './GraphMenu';
import LineChartGraph from './LineChartGraph';
import BarsChartGraph from './BarsChartGraph';


const baseURL =  "https://fakestoreapi.com/products";

class Graph extends React.Component {

handleChange=(option)=>{ 
  this.props.menuDisplay(option);
  this.appearGraph();  
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

appearGraph=()=> { 
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
              <div>
                <GraphMenu
                   handleChange={(option)=>this.handleChange(option)}
                   products={this.props.products}
                   graphMenu={this.props.graphMenu}
                   displayMenu={this.props.displayMenu}                 
                     /></div> 
                 <div>Afisare meniu :{this.props.displayMenu.label}</div>
                <LineChartGraph 
                  isHideGraph_One={this.props.isHideGraph_One}
                  products={this.props.products}/>
                <BarsChartGraph 
                  isHideGraph_Two={this.props.isHideGraph_Two}
                  products={this.props.products}/>                              
              </div>                           
  } 
}


const mapStateToProps=(initialState)=>{
/* 
console.log("initial state", initialState)
console.log("MenuOptions", initialState.graphReducer)
const graphMenu=initialState.graphReducer
const displayMenu=initialState.graphReducer.displayMenu
console.log("display menu", displayMenu)
const products=initialState.graphReducer.products
console.log("products price", products)
const isHideGraph=initialState.graphReducer.isHideGraph
console.log("is hide graph", isHideGraph)
 */
     return initialState.graphReducer
}


export default connect(
  mapStateToProps, {menuDisplay, fetchProductsSucces, 
    fetchProductsRequest,fetchProductError, hideGraphOne, hideGraphTwo},
 
  ) (Graph);


