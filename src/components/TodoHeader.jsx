import React from 'react';

export default class TodoHeader extends React.Component {
    render(){
        return (
            <div>
                <div className="headertodo">
                    <p>
                        27 <span><br/>Tuesday</span> <br/>June <span><br/>2017</span>
                    </p>
                </div>
            </div>
        );
    }
}
