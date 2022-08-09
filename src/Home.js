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
            isHideForm:true,
            isOpenModal:false,
            infoModal:"",
            
            newEditPost:{
              userId:'',
              title:'',
              body:''
            },            
            isEditForm:true          
        };

    }
  
handleCloseModal = () => {
      this.setState({ isOpenModal: false});
    };

handleCloseEditForm= () => {
      this.setState({ isEditForm: !this.state.isEditForm});
    };
   
appearEditForm= (idx)=> {
 // console.log("index appear edit form", idx);
  const idx2=idx+1; 
  axios.get(`${baseURL}/${idx2}`)
    .then(res => {
      const newEditPost= res.data;
      this.setState({
        isEditForm: !this.state.isEditForm,
        newEditPost:newEditPost     
             });     
             })     
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
     // console.log("items", items)
      this.setState({ items});
    })
}

handleOpenModal= (idx)=> {
  const idx2=idx+1
   //idx tabelului incepe de la 1 si indexul de la 0-ASA ca le-am echilibrat-nu le-am parsat nu stiu daca e nevoie
 //console.log("idx", idx2)

  axios.get(`${baseURL}/${idx2}`)
    .then(res => {
      const infoModal= res.data;
    //  console.log("infoModal din modal", infoModal); 
    //  console.log("title din modal", infoModal.title);
      this.setState({
        isOpenModal:true, 
        infoModal:infoModal      
             });     
             }) 
};

handleEditChange=(event)=>{
  const [name, value] = [event.target.name, event.target.value];
  const newEditPost={...this.state.newEditPost}
  newEditPost[name] = value; 
  console.log('new edit post', newEditPost)
      this.setState(
       {
        newEditPost:{...newEditPost,
        [name]:value}
        })   
 
}

async  handleEditSubmit(e ){
  e.preventDefault();
 const newEditPost=this.state.newEditPost
// console.log("newEditPost", newEditPost);
 const id=newEditPost.id
 //console.log("idx", id)
 
await  axios
.put(`${baseURL}/${id}`, newEditPost)
.then(response => {
 // console.log("response newEditPost", response);
 // console.log("response data", response.data);
  this.setState({ newEditPost:response.data});  
  
   axios
  .get(baseURL)        
  .then(res => {
    const items = res.data;
   // console.log("update items", items);
    this.setState({ items});
 })
 
});
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
// const items=this.state.items
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
          console.log("items", items)
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
                 isOpenModal={this.state.isOpenModal} 
                 handleOpenModal={(idx)=>this.handleOpenModal(idx)}
                 handleCloseModal={this.handleCloseModal} 
                 infoModal={this.state.infoModal}
                 isEditForm={this.state.isEditForm} 
                 appearEditForm={(idx)=>this.appearEditForm(idx)}
                 handleCloseEditForm={this.handleCloseEditForm}
                 handleEditChange={this.handleEditChange} 
                 newEditPost={this.state.newEditPost} 
                 handleEditSubmit={(e)=>this.handleEditSubmit(e)}                        
                 />                                                      
                </div> 
                
                      
             </div>      
    );
}
}
   
export default Home;

