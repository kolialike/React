import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className={'header-container'}>
                <div className="wrapper">
                    <div className="header-menu">
                        <a href="#" className="header-menu-item header-menu-item--active">React Blog</a>
                        <a href="#" className="header-menu-item">One</a>
                        <a href="#" className="header-menu-item">Two</a>
                    </div>
                </div>
            </div>
        );
    }
}
