import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '40%',
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
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  addNewTodo (){
    let newtodoname = this.refs.inputName.value;
    let newtododescription = this.refs.inputDescription.value;
    let newtodotime = this.refs.inputTime.value;
    let newtodocolor = 100000 - 0.5 + Math.random() * (999999 - 100000 + 1)
    newtodocolor = Math.round(newtodocolor);
    if(!newtodoname || !newtododescription || !newtodotime){
        alert('Please enter a Todo');
        return;
    }
    else {
        this.props.createTodo(newtododescription, newtodoname, newtodotime, newtodocolor);
        this.setState({modalIsOpen: false});
    }
  }
  closeAdd (){
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
        <button className="todo-close" onClick={this.closeAdd.bind(this)}>✕</button>
        <div>
            <label>Time</label>
            <input type="text" className="form-control" ref="inputTime"/>
            <label>Todo</label>
            <input type="text" className="form-control" ref="inputName"/>
            <label>Description</label>
            <input type="text" className="form-control" ref="inputDescription"/>
        </div>
          <button onClick={this.addNewTodo.bind(this)}className="todo-add">Add</button>
        </Modal>
      </div>
    );
  }
}