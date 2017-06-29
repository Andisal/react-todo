import React, { Component }  from 'react';

export default class Todo extends React.Component {

    deleteTodo(todo){
        this.props.onDeleteTodo(todo);
    }

    render(){
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            <li key={todo.id}><i className={todo.icon}></i>{todo.text}
                            <i className="fa fa-2x fa-trash-o" onClick={this.deleteTodo.bind(this, todo)}></i>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
