import React from "react";
import { ClientContext } from "../../Context/ClientContext.component";

class Puzzle extends React.Component {
    render() {
        return (
            <h1>_currentValue: {ClientContext._currentValue}</h1>
        )
    }
}

export default Puzzle;