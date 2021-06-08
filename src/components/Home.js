import React, { Component } from "react";

export default class Home extends Component{

    state = {age: this.props.obj.age};

    increaseAge = () => {
        this.setState({
            age: this.state.age+1
        })
    }

    render() {
        const {name,age,hobbies}=this.props.obj;
        return(
            <div>
                <h2>{name}</h2>
                <p>Age: {this.state.age}.</p>
                <h3>Hobbies:</h3>
                <ul>
                    {
                        hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)
                    }
                </ul>
                <button onClick={this.increaseAge}>Increase my Age!</button>
            </div>
        )
    }
}