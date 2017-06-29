import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoMain from "./components/TodoMain";
import Todo from "./components/Todo";
import TodoFooter from "./components/TodoFooter";


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id:1, text: 'Hello world', icon: "fa fa-2x fa-plus-square-o icontask"},
            ]
        }
    }

    createTodo (newTodo){
        this.state.todos.push({
            id: this.state.todos.length + 1,
            text: newTodo,
            icon: "fa fa-2x fa-plus-square-o icontask"
        });
        this.setState({todos: this.state.todos})
    }

    onDeleteTodo (todo){
        let todos = this.state.todos;
        for (let i =0;i<todos.length; i++){
            if(todos[i].id === todo.id){
                todos.splice(i, 1);
            }
        }
        this.setState({todos:todos});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="todolist">
                        <TodoHeader />
                        <TodoMain
                            createTodo={this.createTodo.bind(this)}
                        />
                        <Todo
                            todos={this.state.todos}
                            onDeleteTodo={this.onDeleteTodo.bind(this)}
                        />
                        <TodoFooter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;