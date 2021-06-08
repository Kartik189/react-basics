import React, { Component } from 'react';
import Header from './Header';
import Home from './Home'

class App extends Component {

    render() {

        var data={
            name: 'Kartik Sareen',
            age: 21,
            hobbies: ['playing Guitar' , 'cycling' , 'reading']
        };

        return(
            <div>
                <Header />
                <Home obj={data}/>
            </div>   
        )
    }
}

export default App;