import React, {Component} from 'react';

export default class Banner extends Component {
    render() {
        return (
            <div className="big-banner">
                <div className="callout large primary">
                    <div className="row column text-center">
                        <h1>React Blog</h1>
                    </div>
                </div>
            </div>
        )
    }
};