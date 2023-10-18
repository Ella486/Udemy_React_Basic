import React from "react";

function Concept(props) {
    const img = props.image;
    const alt = props.title;

    return (
        <li className="concept">
            <img src={img} alt={alt} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
    
}

export default Concept;