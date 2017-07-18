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
                {id:1, text: 'Wake up', description: 'Lorem ipsum it sem div menstr', time: '6 AM'},
            ]
        }
    }

    createTodo (newTodo){
        this.state.todos.push({
            id: this.state.todos.length + 1,
            text: newTodo,
        });
        this.setState({todos: this.state.todos})
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="center-block todolist">
                            <TodoHeader date={this.state.date} month={this.state.month} year={this.state.year} />
                            <TodoMain
                                {...this.state}
                                createTodo={this.createTodo.bind(this)}
                            />
                            <Todo
                                {...this.state}
                                todos={this.state.todos}
                            />
                            <TodoFooter/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;