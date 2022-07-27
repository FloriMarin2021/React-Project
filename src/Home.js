import React from 'react';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import './Home.css'; 
import HomeTable from './HomeTable.js'; 
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [], 
            isLoaded:false
        };
    }
  /*
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        const baseURL =  "https://jsonplaceholder.typicode.com/posts";
        fetch(baseURL)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoaded:true
                });
            })
    }
 */  

 /*   
    async componentDidMount() {
        const baseURL =  "https://jsonplaceholder.typicode.com/posts";
        try {
          const response = await fetch(baseURL);
          const json = await response.json();
          this.setState({ items: json });
          if (!response.ok) {
            throw Error(response.statusText);
          }
        } catch (error) {
          console.log(error);
        }
    } 
   */
  
    componentDidMount() {
        const baseURL =  "https://jsonplaceholder.typicode.com/posts";
        axios.get(baseURL)
          .then(res => {
            const items = res.data;
            this.setState({ items});
          })
      }


    render() {  
   
        return (        
            <div className='home'>
               <div className='home_nav_menu'>                 
                < NavigationMeniu />                                           
                </div>                
               <div>
               <div className='home_table'>                 
                 <HomeTable items={this.state.items}/>                                        
                </div>                
               
        </div>
        </div>
    );
}
}
   
export default Home;

