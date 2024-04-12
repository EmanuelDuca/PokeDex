import React from "react";
import pokeImage from "../images/poke-headline.webp";

function HeadLine({ pokemon }){
    let content = {}; 

    if (!pokemon){
        content = {
            name: "Pokemon Dex",
            description: "Click on a pokemon to find all the information about it.",
            imageUrl: pokeImage 
        };
    } else {
        // Assign pokemon properties to content if pokemon exists
        content = {
            name: pokemon.name,
            description: {
                weight: pokemon.weight,
                Height: pokemon.height,
            },
            imageUrl: pokemon.imageUrl 
            //abilities: pokemon.abilities ? pokemon.abilities.map(ability => ability.ability.name).join(", ") : "",
            //stats: pokemon.stats ? pokemon.stats.map(stat => `${stat.name}: ${stat.value}`).join(", ") : "",
        };
    }

    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">{content.name}</h1>
                    <p className="lead">{content.description.weight}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Find more</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img
                        className="rounded-lg-3"
                        src={content.imageUrl}
                        alt={content.name}
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover', // or 'contain' depending on the desired effect
                            display: 'block',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeadLine;
