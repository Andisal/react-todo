import React, { Component }  from 'react';

export default class TodoMain extends React.Component {

    addNewTodo(){
        let newtodo = this.refs.newTodo.value;
        if (!newtodo){
            alert('Please enter a Todo');
            return;
        }
        this.props.createTodo(newtodo);
        this.refs.newTodo.value = '';
    }

    render(){
        return (
            <div>
                <h5>What You Want To Do<i className="fa fa-male fa-2x" aria-hidden="true"></i></h5>

                <i className="fa fa-2x fa-plus-square-o" aria-hidden="true" onClick={this.addNewTodo.bind(this)}></i>
                <input type="text" placeholder="Notify Me!" className="notify" ref="newTodo"/>
            </div>
        );
    }
}
