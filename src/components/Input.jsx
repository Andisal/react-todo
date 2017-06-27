import React from 'react';

export default class Input extends React.Component {
    render(){
        return (
            <div>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}
