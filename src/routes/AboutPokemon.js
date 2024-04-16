import PokemonVersionImg from "../images/various-pokemons.avif";
import SecondImg from "../images/pokemon-title.png";
import Pikachu from "../images/Pikatchu.png";

export default function AboutPokemon(){
    return (
        <div className="container mt-4">
            {/* Introduction to Pokémon */}
            <div className="mb-4">
                <h1 className="display-4">What are <img src={SecondImg} width="200px" alt="Pokémon Game Cover" className="img-fluid rounded"/>?</h1>
                <p className="lead">
                    Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. For trainers, the goal is to capture and train every Pokémon and thus to become a Pokémon Master.
                </p>
                <img src={PokemonVersionImg} alt="Various Pokémon" className="img-fluid rounded"/>
            </div>

            {/* History of Pokémon */}
            <div className="mb-4">
                <h2>History of Pokémon</h2>
                <p>
                    Pokémon began as a pair of interlinkable Game Boy role-playing video games developed by Game Freak and published by Nintendo. Since its inception, the franchise has expanded to multiple games, a trading card game, television shows, movies, comic books, and toys.
                </p>
            </div>

            {/* Interesting Facts */}
            <div className="mb-4">
                <h2>Interesting Facts About Pokémon</h2>
                <ul>
                    <li>The Pokémon franchise was created by Satoshi Tajiri and Ken Sugimori, and it was inspired by Tajiri's childhood interest in collecting creatures.</li>
                    <li>Pikachu, one of the most iconic Pokémon, was not originally intended to be the franchise mascot.</li>
                    <li>There are now over 800 Pokémon species in the Pokémon universe.</li>
                    <li>The Pokémon games use a rock-paper-scissors type mechanic called "types" that determine the strengths and weaknesses of each Pokémon.</li>
                </ul>
                <img src={Pikachu} alt="Iconic Pokémon Pikachu" className="img-fluid rounded"/>
            </div>
        </div>
    );
}

