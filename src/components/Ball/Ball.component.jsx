import React, { useContext } from "react";
import { ClientContext } from "../../Context/ClientContext.component";

function Ball() {
    const clientNameContext = useContext(ClientContext);
    return (
        <h1>useContext: {clientNameContext}</h1>
    )
}

export default Ball;