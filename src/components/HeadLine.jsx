import React, { useState } from "react";
import pokeImage from "../images/poke-headline.webp";
import pk from "../images/pk.png";
import "./HeadLine.css";

function HeadLine({ pokemon }) {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    
    const handlePokemonClick = (pokemonName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                console.log("Pokemon details:", data);
                setPokemonDetails(data);
                setSelectedPokemon(pokemonName); // Update selectedPokemon state
            })
            .catch(error => console.error('Error fetching Pokemon details:', error));
    };

    let content = pokemon ? {
        name: pokemon.name,
        description: pokemon.description,
        imageUrl: pokemon.imageUrl,
        stats: pokemon.stats
    } : {
        name: "Pokemon Dex",
        description: "Click on a pokemon to find all the information about it.",
        imageUrl: pokeImage,
        stats: null
    };

    return (
        <div className="headline container my-5">
            <div className="row p-4 pb-5 pe-lg-0 pt-lg-5 align-items-center">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">{content.name}</h1>
                    <p className="lead">{content.description}</p>
                    {pokemon && ( // Render button only if pokemon prop is not null
                        <button onClick={() => handlePokemonClick(content.name)}>Find more</button>
                    )}
                    {selectedPokemon === content.name && pokemonDetails && (
                        <div>
                            {pokemonDetails.stats && (
                                <p>Stats: {pokemonDetails.stats.map(stat => `${stat.base_stat} (${stat.stat.name})`).join(', ')}</p>
                            )}
                            {pokemonDetails.abilities && (
                                <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
                            )}
                            {pokemonDetails.types && (
                                <p>Type: {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
                            )}
                            {pokemonDetails.height && <p>Height: {pokemonDetails.height}</p>}
                            {pokemonDetails.weight && <p>Weight: {pokemonDetails.weight}</p>}
                        </div>
                    )}
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src={content.imageUrl} alt={content.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
}

export default HeadLine;
