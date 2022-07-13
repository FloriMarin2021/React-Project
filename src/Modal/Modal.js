import React from "react";
import "./Modal.css";

 class Modal extends React.Component {

   onClose=e=> {
    this.props.onClose && this.props.onClose();
  };

  render() {
    
    if (!this.props.isModalVisible) {
      return null;
    }

   
    return (
        <div className='modal'>        
        <button className="modal_btn" onClick={this.onClose}>
           close
          </button>
        <ul className='modal_content'>
          <li>Task: {this.props.openedTask.nr} </li>
          <li>Description: {this.props.openedTask.description}</li>
          <li>Date: {this.props.openedTask.date}</li>
          <li>Status:  {this.props.openedTask.status.map((item)=>{
                            return(
                              <ul>
                                <li>{item.label}</li>
                              </ul>
                            )
                          }) }                                                        
                        </li>            
          <li>Notes: {this.props.openedTask.notes}</li>
        </ul>       
        <div >{this.props.showModal}</div>       
      </div>     
    );
  }
}

export default Modal;