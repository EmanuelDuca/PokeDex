import React , {useState, useEffect} from "react";
import Pokemon from "./Pokemon";
import HeadLine from "./HeadLine";

function PokemonGrid(){
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemons() {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
          const data = await response.json();
          const pokemonsData = data.results.map((pokemon, index) => ({
            id: offset + index + 1,
            name: pokemon.name,
            // Constructing a URL to a placeholder image as an example
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset + index + 1}.png`,
          }));
          setPokemons(pokemonsData);
        }
    
        fetchPokemons();
      }, [offset]);

    const handleForwardClick = () => {
        setOffset(prevOffset => prevOffset +12);
    }

    const handleBackClick = () => {
        setOffset(prevOffset => Math.max(0, prevOffset - 12)); // Decrease offset by 12 but not below 0
    };

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon); // Set the clicked Pokemon as the selected one
    };

    return (
        <>
            <HeadLine pokemon={selectedPokemon}/>
            <div className="container">
                <div className="row">
                    {pokemons.map((pokemon) => (
                        // Bootstrap's col-md-4 class makes it 3 items per row on medium devices and larger
                        <div key={pokemon.id} className="col-lg-3 col-md-4 col-sm-6 col-12" onClick={() => handlePokemonClick(pokemon)}>
                            <Pokemon id={pokemon.id} name={pokemon.name} imageUrl={pokemon.imageUrl} />
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4" style={{marginRight: '20px'}} onClick={handleBackClick}>← Back</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={handleForwardClick}>Forward →</button>
                </div>
            </div>
        </>
    );
}

export default PokemonGrid;