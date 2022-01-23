import React from "react";
import { ClientContext } from "../../Context/ClientContext.component";

class VideoGame extends React.Component {
    render() {
        return (
            <ClientContext.Consumer>
                {(value) => <h1>Consumer: {value}</h1> }
            </ClientContext.Consumer>
        )
    }
}

export default VideoGame;