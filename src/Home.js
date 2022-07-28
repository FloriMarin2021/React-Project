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
            isLoaded:false,
            userId:'',
            id:'',
            title:'',
            body:'',

            isHideForm:true
        };
    }

   appearForm= ()=> { 
      this.setState({
        isHideForm: !this.state.isHideForm,         
      }); 
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
deleteRow=(idx)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${idx}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data); 
            const items = this.state.items.filter((item, index) => index!== idx);  
            this.setState({items });            
          })                  
      }  

      
 /*     
handleSubmit=(e)=> {
        e.preventDefault()
        const itemNew = {
          userId:this.state.userId,
          id:this.state.id,
          title:this.state.title,
          body:this.state.body
      }
      const baseURL =  "https://jsonplaceholder.typicode.com/posts";
      axios.post(baseURL, itemNew)
      .then(res => console.log(res.data));
    }
*/
    render() {  
   
        return (        
            <div className='home'>
               <div className='home_nav_menu'>                 
                < NavigationMeniu />                                           
                </div>                
              
               <div className='home_table'>                 
                 <HomeTable items={this.state.items}
                 appearForm={this.appearForm}
                 isHideForm={this.state.isHideForm} 
                 deleteRow={this.deleteRow}              
                 handleSubmit={this.handleSubmit}
              
             
               
                 />                                        
                </div>                
               
             </div>
       
    );
}
}
   
export default Home;

