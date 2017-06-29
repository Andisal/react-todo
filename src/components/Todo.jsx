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
                                <div className="col-xs-3"><i className={todo.icon} onClick={this.editTodo.bind(this, todo)}></i></div>
                                <div className="col-xs-6">{todo.text}</div>
                                <div className="col-xs-3"><i className="fa fa-2x fa-trash-o" onClick={this.deleteTodo.bind(this, todo)}></i></div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
