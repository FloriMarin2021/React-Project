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
              id:'',
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

 async componentDidMount(){
      try {
        await axios.get(baseURL)
        .then(res => {
         const items = res.data;
          this.setState({items});
        })
        
      } catch (error) {
        console.log(error);
      }
  } 

handleChange=(event)=>{
  const [name, value] = [event.target.name, event.target.value];
 const post=this.state.post
 const newPost = {
    ...post,
   [name]: value
 }; 
 console.log("  new post ", newPost) 
   this.setState({ post:newPost});
}

 handleSubmit=(event)=>{
  event.preventDefault();
  const items=this.state.items
  const post=this.state.post 
  console.log("items before ", items)
  console.log("post de adaugat ", post)  

 axios
.post(baseURL, post)
.then(response => {
  console.log("response", response);
  const updatedPosts = [
    ...items,
    {userId:post.userId, id:post.id, title:post.title, body:post.body}
  ];   
  console.log("update post", updatedPosts)
  const newItems=[...items, updatedPosts]
  console.log("newitems", newItems)
  this.setState({newItems}); 
 
});


}

 /*   
    componentDidMount() {
      const baseURL =  "https://jsonplaceholder.typicode.com/posts";
      axios.get(baseURL)
        .then(res => {
          const items = res.data;
          console.log("items", items)
          this.setState({ items});
        })
    }
*/
     

/*
   async deleteRow(idx){
      await  axios.delete(`https://jsonplaceholder.typicode.com/posts/${idx}`)   
      .then(res => {  
        console.log(res);  
        console.log(res.data); 
        const items = this.state.items.filter((item, index) => index!== idx);  
        this.setState({items });   
      })
       axios.get(baseURL)        
        .then(res => {
          const items = res.data;
          this.setState({ items});
       })
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
                 handleChange={this.handleChange} 
                 postItems={this.state.postItems}         
                 />                                        
                </div>                
               
             </div>
       
    );
}
}
   
export default Home;

