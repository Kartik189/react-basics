import React, { Component } from 'react';
import Header from './Header';

class Root extends Component{
    render() {
        return(
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Root;