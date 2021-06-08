import React, { Component } from 'react';
import Header from './Header';
import Home from './Home'

class App extends Component {

    state={homeLink: "Home"};

    onGreet() {
        alert("Hello");
    }

    onLinkChange(newlink) {
        this.setState({
            homeLink: newlink
        });
    } 

    render() {

        var data={
            name: 'Kartik Sareen',
            age: 21,
            hobbies: ['playing Guitar' , 'cycling' , 'reading']
        };

        return(
            <div>
                <Header link={this.state.homeLink}/>
                <Home obj={data} greet={this.onGreet} changeLink={this.onLinkChange.bind(this)}/>
            </div>   
        )
    }
}

export default App;