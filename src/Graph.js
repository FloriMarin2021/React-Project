import React from 'react';
import './Graph.css'; 
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import {connect} from 'react-redux';
import { menuDisplay, fetchProductsRequest, 
        fetchProductsSucces, fetchProductError} from './Actions/graph';
import axios from 'axios'
import GraphMenu from './GraphMenu';
import LineChartGraph from './LineChartGraph';
import BarsChartGraph from './BarsChartGraph';


const baseURL =  "https://fakestoreapi.com/products";

class Graph extends React.Component {



handleChange=(option, popupState)=>{ 
  this.props.menuDisplay(option);
  popupState.close();
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

  render(){
    return <div className='graph'>
              <div className='nav_menu'>               
                 <NavigationMeniu/> 
              </div>
              <div>
                <GraphMenu
                   handleChange={(option, popupState)=>this.handleChange(option, popupState)}
                   products={this.props.products}
                   graphMenu={this.props.graphMenu}
                   displayMenu={this.props.displayMenu} 
                              
                     /></div> 
                 <div>Afisare meniu :{this.props.displayMenu.label}</div>

                {this.props.displayMenu.id==='lines'?<LineChartGraph                  
                  products={this.props.products}/>:null}
                {this.props.displayMenu.id==='bars'?<BarsChartGraph                 
                  products={this.props.products}/>:null} 
              
                                         
              </div>                           
  } 
}


const mapStateToProps=(initialState)=>{

     return initialState.graphReducer
}


export default connect(
  mapStateToProps, {menuDisplay, fetchProductsSucces, 
    fetchProductsRequest,fetchProductError},
 
  ) (Graph);


