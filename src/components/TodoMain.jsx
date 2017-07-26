import React from 'react';
import Todo from './Todo';

export default class TodoMain extends React.Component {

    render(){
        return (
            <div className="main">
                <Todo
                    todos={this.props.todos} 
                    deleteTodo={this.props.deleteTodo.bind(this)}
                />
             </div>
        );
    }
}
