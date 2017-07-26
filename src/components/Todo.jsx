import React  from 'react';

export default class Todo extends React.Component {

    deleteTodo(todo){
        this.props.deleteTodo(todo);
    }
    render(){
        return (
            <div>
                {
                    this.props.todos.map(todo => {
                        return (
                            <div key={todo.id} className="row">
                               <div className="col-md-2"><span className="todo-img" style={{background: todo.color}}></span></div>
                               <div className="col-md-2"><p className="todo-time" style={{color: todo.color}}>{todo.time}</p></div>
                               <div className="col-md-8">
                                   <h1 className="todo-name" style={{color: todo.color}}>{todo.text}</h1>
                                   <p className="todo-description" style={{color: todo.color}}>{todo.description}</p>
                                   <p key = {todo.id} onClick={this.deleteTodo.bind(this, todo.id)}>x</p>
                               </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
