import React from 'react';

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '1123'
        }
    }



    render(){
        return (
            <ul id="Todo">
                <li className="todo"><i className="fa fa-pencil fa-2x" aria-hidden="true"></i>Herwef</li>
            </ul>
        );
    }
}
