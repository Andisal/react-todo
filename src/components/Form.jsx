import React from 'react';

export default class Form extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: 0,
            text: ''
        }

    }

    onHandleClick (){
        const newTodoText = document.getElementById('name').value;
        this.setState({
            text: newTodoText,
            id: this.state.id + 1
        })
    }

    shouldComponentUpdate(){
        const newTodo = document.createElement('li');
        const todoList = document.getElementById('todolist');
        if(this.state.id === 0){
            this.onHandleClick();
        }else {
            newTodo.innerText = this.state.id + ' ' + this.state.text;
            todoList.appendChild(newTodo);
        }
    }

    render(){
        return (
            <div>
                {/*<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">*/}
                    {/*Launch demo modal*/}
                {/*</button>*/}

                {/*<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">*/}
                    {/*<div className="modal-dialog" role="document">*/}
                        {/*<div className="modal-content">*/}
                            {/*<div className="modal-header">*/}
                                {/*<h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>*/}
                                {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                                    {/*<span aria-hidden="true">&times;</span>*/}
                                {/*</button>*/}
                            {/*</div>*/}
                            {/*<div className="modal-body">*/}
                                {/*<input type="text" id="name" className="form-control"/>*/}
                            {/*</div>*/}
                            {/*<div className="modal-footer">*/}
                                {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                                {/*<button type="button" className="btn btn-primary" onClick={this.onHandleClick.bind(this)} data-dismiss="modal">Save changes</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
