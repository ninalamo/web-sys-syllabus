export default function E3W7ExerSolutionPokesearch() {
  const code = `// Week 7: PokeSearch — Solution

import { useState, useEffect } from 'react';

function PokeSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchQuery) {
            setPokemon(null);
            return;
        }

        async function fetchPokemon() {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${searchQuery.toLowerCase()}\`);
                if (!res.ok) throw new Error('Pokemon not found');
                const data = await res.json();
                setPokemon(data);
            } catch (err) {
                setError(err.message);
                setPokemon(null);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemon();
    }, [searchQuery]);

    return (
        <div>
            <h1>PokeSearch</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Pokemon name..."
            />

            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Height: {pokemon.height} | Weight: {pokemon.weight}</p>
                </div>
            )}
        </div>
    );
}

export default PokeSearch;
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-pokesearch.jsx</span>
        <span className="code-lang">JSX</span>
      </div>
      <pre className="language-jsx"><code className="language-jsx">{code}</code></pre>
    </div>
  )
}
