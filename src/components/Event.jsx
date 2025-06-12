import React from "react";

const Event = (props) => {
    return (
        <td className = {'Event ' + props.color}>
            <img src={props.src} alt={props.event} />
            <h5>{props.event}</h5>
            <h3>{props.desc}</h3>
            <button href={props.link}>View Meet</button>
        </td>
    )
}

export default Event;