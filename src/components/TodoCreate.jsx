import React, { Component }  from 'react';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};
export default class TodoCreate extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className="todo-create" onClick={this.openModal}>
            <p className="add">+</p>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div>
            <label>Todo</label>
            <input type="text" className="form-control"/>
            <label>Description</label>
            <input type="text" className="form-control"/>
        </div>
          <button onClick={this.closeModal} className="todo-close">close</button>
        </Modal>
      </div>
    );
  }
}