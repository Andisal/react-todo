import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoMain from "./components/TodoMain";
import Todo from "./components/Todo";
import TodoFooter from "./components/TodoFooter";


class App extends Component {

    constructor(props){
        super(props);
        let today = new Date(),
        date = today.getDate();
        this.state = {
            text: '',
            isEdit: 0,
            date: date ,
            month: today.getMonth(),
            year: today.getFullYear(),
            todos: [
                {id:1, text: 'Hello world', icon: "fa fa-pencil fa-2x icontask"},
            ]
        }
    }

    createTodo (newTodo){
        this.state.todos.push({
            id: this.state.todos.length + 1,
            text: newTodo,
            icon: "fa fa-pencil fa-2x icontask"
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
    handleTodoEdit(todo){
        this.setState({
            text: todo.text,
            isEdit: todo.id
        })
    }

    handleChangeText(text){
        this.setState({
            text: text
        })
    }
    handleTodoUpdate(todo){
        let todos = this.state.todos;
        for (let i =0;i<todos.length; i++){
            if(todos[i].id === todo.id){
                todos.splice(i, 1);
            }
        }
        todos.push(todo);
        this.setState({todos:todos});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="center-block todolist">
                        <TodoHeader date={this.state.date} month={this.state.month} year={this.state.year} />
                        <TodoMain
                            {...this.state}
                            changeText = {this.handleChangeText.bind(this)}
                            createTodo={this.createTodo.bind(this)}
                            onTodoUpdate={this.handleTodoUpdate.bind(this)}
                        />
                        <Todo
                            {...this.state}
                            todos={this.state.todos}
                            onDeleteTodo={this.onDeleteTodo.bind(this)}
                            editTodo={this.handleTodoEdit.bind(this)}
                        />
                        <TodoFooter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;