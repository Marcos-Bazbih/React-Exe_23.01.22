import React from "react";
import Ball from "../Ball/Ball.component";
import Puzzle from "../Puzzle/Puzzle.component";
import VideoGame from "../VideoGame/VideoGame.component";

class Toy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "",
            age: ""
        }
        this.updateToy = this.updateToy.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    

    componentWillMount(){
        alert("welcome to my toys store");
    }
    componentDidMount(){
        console.log("component rendered");
    }
    componentWillUpdate(){
        alert("before update");
    }
    componentDidUpdate(){
        console.log("after update");
    }


    updateToy(event) {
        this.state[event.target.name] = event.target.value;
    }
    updateState() {
        this.setState(this.state);
    }

    render() {
        let {companyName, age} = this.state;
        return (
            <div>
                <h1>Toy name: {this.props.name}</h1> <br />
                <h3>Company Name: {companyName}</h3> <br />
                <h3>Age: {age}</h3> <br />
                <label>Company name</label> <br />
                <input name="companyName" onChange={(event) => { this.updateToy(event) }} type="text" /> <br />
                <label>Age</label> <br />
                <input name="age" onChange={(event) => { this.updateToy(event) }} type="number" /> <br />
                <button onClick={this.updateState}>Click</button> 

                <Puzzle />
                <VideoGame />
                <Ball />
            </div>
        )
    }
}

export default Toy;