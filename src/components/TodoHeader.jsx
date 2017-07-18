import React from 'react';
import TodoCreate from './TodoCreate'

export default class TodoHeader extends React.Component {
    render(){
        return (
            <div>
                <div className="headertodo">
                    <div>
                        <a href="" className="btn-bread">
                            <span className="first-span"></span>
                            <span className="second-span"></span>
                            <span className="last-span"></span>
                        </a>
                    </div>
                    <h1 className="timeline">Timeline</h1>
                    <a href=""><img src="./img/eye-icon.png" className="eye-icon" alt=""/></a>
                    <div className="circle-date-block">
                        <div className="circle-date">
                            <span className="date">
                                {this.props.date}
                            </span>
                        </div>
                    </div>
                    <h1 className="day">Monday</h1>
                    <p className="full-date">
                        July {this.props.year}
                    </p>
                </div>
                <TodoCreate />
            </div>
        );
    }
}
