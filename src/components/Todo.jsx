import React, { Component }  from 'react';

export default class Todo extends React.Component {

    deleteTodo(todo){
        this.props.onDeleteTodo(todo);
    }
    editTodo(todo){
        this.props.editTodo(todo);
    }

    render(){
        return (
            <div>
                {
                    this.props.todos.map(todo => {
                        return (
                            <div key={todo.id} className="row">
                                <div className="col-md-3"><i className={todo.icon} onClick={this.editTodo.bind(this, todo)}></i></div>
                                <div className="col-md-6 todotext">
                                    <p>{todo.text}</p>
                                </div>
                                <div className="col-md-3">
                                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                                    <i className="fa fa-trash-o" onClick={this.deleteTodo.bind(this, todo)}></i>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
