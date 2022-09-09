import React from "react";

export default function Card(props) {
    
    return(
        <div className="card">
                <img class="card-image" src={props.source} />
                <h2 className="card-title">{props.title}</h2>
                <p className="card-content">{props.content}</p>
            </div>
    )
}