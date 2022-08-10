import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


class BarsChartGraph extends React.Component {

render(){
return(
  <div>
    <BarChart
         width={500}
         height={300}
         data={this.props.products}
         margin={{
         top: 5,
         right: 30,
         left: 20,
         bottom: 5
        }}>        
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar  dataKey="rating.count" fill="#8884d8" />
      <Bar dataKey="price" fill="#82ca9d" />
    </BarChart>  
  </div>
);
}
}

export default BarsChartGraph;