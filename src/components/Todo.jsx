import React, { Component }  from 'react';

export default class Todo extends React.Component {

    render(){
        return (
            <div>
                {
                    this.props.todos.map(todo => {
                        return (
                            <div key={todo.id} className="row">
                               <div className="col-md-2"><span className="todo-img"></span></div>
                               <div className="col-md-2"><p className="todo-time">{todo.time}</p></div>
                               <div className="col-md-8">
                                   <h1 className="todo-name">{todo.text}</h1>
                                   <p className="todo-description">{todo.description}</p>
                               </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
