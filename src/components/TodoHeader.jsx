import React from 'react';

export default class TodoHeader extends React.Component {
    render(){
        return (
            <div>
                <div className="headertodo">
                    <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                    <p>
                        {this.props.date} <br/>
                        <span>Friday</span> <br/>
                        June <br/>
                        <span>{this.props.year}</span>
                    </p>
                </div>
            </div>
        );
    }
}
