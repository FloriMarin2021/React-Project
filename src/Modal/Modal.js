import React from "react";
import "./Modal.css";

 class Modal extends React.Component {

   onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.isModalVisible) {
      return null;
    }

   
    return (
      <div >
        <h1>Modal Window   </h1>
        <ul>
          <li>Task </li>
          <li>Description</li>
          <li>Date</li>
          <li>Status</li>
          <li>Notes</li>

        </ul>
        <div> {this.props.showInfo}</div>
        <div >{this.props.showModal}</div>
        
        
        <div >
          <button onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;