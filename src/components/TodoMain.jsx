import React from 'react';

export default class TodoMain extends React.Component {
    render(){
        return (
            <div>
                <h4>What You Want To Do</h4>
                <input type="text" placeholder="Notify Me!" className="notify"/>
            </div>
        );
    }
}
