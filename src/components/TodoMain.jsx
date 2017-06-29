import React, { Component }  from 'react';

export default class TodoMain extends React.Component {

    addNewTodo(){
        let newtodo = this.refs.newTodo.value;
        if (!newtodo){
            alert('Please enter a Todo');
            return;
        }
        if(this.props.isEdit){
            let updatedTodo = {
                id:this.props.isEdit,
                text: newtodo,
                icon: "fa fa-pencil fa-2x icontask"
            }
            this.props.onTodoUpdate(updatedTodo)
        }else {
            this.props.createTodo(newtodo);
        }
        this.refs.newTodo.value = '';
        this.refs.newTodo.placeholder = 'Notify Me!';
    }
    changeText(event){
        this.props.changeText(event.target.value);
    }

    render(){
        return (
            <div>
                <h5>What You Want To Do<i className="fa fa-male fa-2x" aria-hidden="true"></i></h5>

                <i className="fa fa-2x fa-plus-square-o" aria-hidden="true" onClick={this.addNewTodo.bind(this)}></i>
                <input type="text" placeholder="Notify Me!" className="notify" ref="newTodo" onChange={this.changeText.bind(this)} value={this.props.text}/>
            </div>
        );
    }
}
