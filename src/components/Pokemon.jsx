import React from "react";
import "./Pokemon.css";

function Pokemon({ id, name, imageUrl }){
    return (
        <div className="pokemon hover-effect">
            <div>
                <p>#{id}</p>
                <p><strong>{name}</strong></p>
            </div>
            <img src={imageUrl} alt={name} style={{ width: "50px", height: "50px" }} />
        </div>
    );
}

export default Pokemon;