import React from 'react';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import './Home.css'; 
import HomeTable from './HomeTable.js'; 
import axios from 'axios'

const baseURL =  "https://jsonplaceholder.typicode.com/posts";


class Home extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [], 
            isLoaded:false,

            post:{
              userId:'',
              title:'',
              body:''
            },

            isHideForm:true
        };

    }
   
appearForm= ()=> { 
      this.setState({
      isHideForm: !this.state.isHideForm,         
      }); 
}

componentDidMount() {
  axios.get(baseURL)
    .then(res => {
      const items = res.data;
      console.log("items", items)
      this.setState({ items});
    })
}

handleChange=(event)=>{
  const [name, value] = [event.target.name, event.target.value];
 const post=this.state.post
 const newPost = {
    ...post,
   [name]: value
 }; 
   this.setState({ post:newPost});
}

async  handleSubmit(event){
  event.preventDefault();
 const items=this.state.items
 const post=this.state.post 

await  axios
.post(baseURL, post)
.then(response => {
  console.log("response", response);
  
     axios
  .get(baseURL)        
  .then(res => {
    const items = res.data;
    this.setState({ items});
 })
 
});
}

 async deleteRow(idx){
      await  axios.delete(`${baseURL}/${idx}`)   
      .then(res => {  
        console.log(res);  
        console.log(res.data);        
      })
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
               <div className='home_table'>                 
                 <HomeTable 
                 items={this.state.items}
                 appearForm={this.appearForm}
                 isHideForm={this.state.isHideForm} 
                 deleteRow={(idx)=>this.deleteRow(idx)}              
                 handleSubmit={(e)=>this.handleSubmit(e)}
                 handleChange={this.handleChange}         
                 />                                        
                </div>         
             </div>      
    );
}
}
   
export default Home;

