import React from 'react';
import Todo from "./Todo";


export default class TodoMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    onHandleClick (){
        const newTodo = document.getElementById('inputTodo');
        this.setState({text: newTodo.value});
    }

    shouldComponentUpdate(){
        if(this.state.text !== ''){
            const todo = document.createElement('p');
            const Todolist = document.getElementById('todolist');
            todo.className = 'todo';
            todo.innerText = this.state.text;
            Todolist.appendChild(todo);
            return true;
        }
        else {
            this.onHandleClick();
            return false
        }
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
