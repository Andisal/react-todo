import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoMain from "./components/TodoMain";
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
            locationCity: 'Chelyabinsk',
            todos: [
                {id:0, text: 'Wake up', description: 'Lorem ipsum it sem div menstr', time: '6 AM', color: '#76a7ea'},
                {id:1, text: 'Eat dinner', description: 'Lorem ipsum it sem div menstr', time: '1 PM', color: '#fc3554'},
                {id:2, text: 'Work', description: 'Lorem ipsum it sem div menstr', time: '3 PM', color: '#76a7ea'}
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
    deleteTodo (todo){
        for(let i=0; i<this.state.todos.length;i++){
            if(this.state.todos[i].id === todo){
                this.state.todos.splice(i, 1);
            }
        }
        this.setState({todos: this.state.todos})
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <div className="center-block todolist">
                            <TodoHeader date={this.state.date} month={this.state.month} year={this.state.year} locationCity={this.state.locationCity}/>
                            <TodoCreate 
                                createTodo={this.createTodo.bind(this)} 
                                />
                            <TodoMain
                                todos={this.state.todos}
                                deleteTodo={this.deleteTodo.bind(this)}
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