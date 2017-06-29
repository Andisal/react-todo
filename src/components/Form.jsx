import React from 'react';

export default class Form extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: 0,
            text: ''
        }

    }

    onHandleClick (){
        const newTodoText = document.getElementById('name').value;
        this.setState({
            text: newTodoText,
            id: this.state.id + 1
        })
    }

    shouldComponentUpdate(){
        const newTodo = document.createElement('li');
        const todoList = document.getElementById('todolist');
        if(this.state.id === 0){
            this.onHandleClick();
        }else {
            newTodo.innerText = this.state.id + ' ' + this.state.text;
            todoList.appendChild(newTodo);
        }
    }

    render(){
        return (
            <div>
            </div>
        );
    }
}
