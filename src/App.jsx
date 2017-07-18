import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoMain from "./components/TodoMain";
import Todo from "./components/Todo";
import TodoFooter from "./components/TodoFooter";
import TodoCreate from "./components/TodoCreate";


class App extends Component {

    constructor(props){
        super(props);
        let today = new Date(),
        date = today.getDate();
        this.state = {
            text: '',
            date: date ,
            month: today.getMonth(),
            year: today.getFullYear(),
            todos: [
                {id:1, text: 'Wake up', description: 'Lorem ipsum it sem div menstr', time: '6 AM', color: '#76a7ea'},
            ]
        }
    }

    createTodo (newtododescription, newtodoname, newtodotime, newtodocolor){
        this.state.todos.push({
            id: this.state.todos.length + 1,
            text: newtodoname,
            description: newtododescription,
            time: newtodotime,
            color: '#' + newtodocolor
        });
        this.setState({todos: this.state.todos})
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="center-block todolist">
                            <TodoHeader date={this.state.date} month={this.state.month} year={this.state.year}/>
                            <TodoCreate 
                                {...this.state}
                                createTodo={this.createTodo.bind(this)} 
                                />
                            <TodoMain
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