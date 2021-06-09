import React, { Component } from 'react';
import Home from './Home';
import Root from './Root';
import User from './User';

import {Route , Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/'>
                        <Root>
                            <Route exact path='/'>
                                <Home />
                            </Route>                            
                            <Route path='/Home'>
                                <Home />
                            </Route>
                            <Route path="/user/:id">
                                <User />
                            </Route>
                        </Root>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;