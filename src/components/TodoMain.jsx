import React from 'react';
import Todo from "./Todo";


export default class TodoMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'hrthtr',
            icon: 'fa-pencil fa fa-2x'
        }
    }

    onHandleClick (){
        const newTodo = document.getElementById('inputTodo').value;
        this.setState({text: newTodo});
    }

    shouldComponentUpdate(){
        const Todolist = document.getElementById('Todo');
        const newtodo = document.createElement('li');
        const icon = document.createElement('i');
        icon.id = this.state.icon;
        newtodo.className = 'todo';
        newtodo.innerText = icon + this.state.text;
        Todolist.appendChild(newtodo);
        return true;
    }

    render(){
        return (
            <div>
                <h5>What You Want To Do<i className="fa fa-male fa-2x" aria-hidden="true"></i></h5>
                <i className="fa fa-2x fa-plus-square-o" aria-hidden="true" onClick={this.onHandleClick.bind(this)}></i><input type="text" placeholder="Notify Me!" className="notify" id="inputTodo"/>
                <Todo />
            </div>
        );
    }
}
