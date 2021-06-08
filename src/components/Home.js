import React, { Component } from "react";

class Home extends Component{

    state = {age: this.props.obj.age};

    increaseAge = () => {
        this.setState({
            age: this.state.age+1
        })
    }

    onchangeLink() {
        this.props.changeLink("Changed Link");
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
                <button onClick={this.increaseAge} className="btn btn-primary">Increase my Age!</button>
                <hr />
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr />
                <button onClick={this.onchangeLink.bind(this)} className="btn btn-primary">Change Home Link</button>
            </div>
        )
    }
}

export default Home;