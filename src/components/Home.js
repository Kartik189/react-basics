import React, { Component } from "react";

export default class Home extends Component{
    render() {
        const {name,age,hobbies}=this.props.obj;
        return(
            <div>
                <h2>{name}</h2>
                <p>Age: {age}.</p>
                <h3>Hobbies:</h3>
                <ul>
                    {
                        hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)
                    }
                </ul>
                <hr />
                { this.props.children }
            </div>
        )
    }
}