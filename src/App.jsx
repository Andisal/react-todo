import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import TodoHeader from './components/TodoHeader';
import TodoMain from "./components/TodoMain";


class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="todolist">
                        <TodoHeader />
                        <TodoMain />
                    </div>
                </div>
                <ul id="todolist"></ul>
                <Form />
            </div>
        );
    }
}

export default App;