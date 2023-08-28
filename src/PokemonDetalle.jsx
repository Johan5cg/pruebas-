import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonDetalle = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setPokemon(data);
        } else {
          console.error('Error al obtener detalles de Pokémon:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener detalles de Pokémon:', error);
      }
    };
    fetchPokemon();
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      {pokemon ? (
        <div className="card" style={{ width: '18rem' }}>
          <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">
              Peso: {pokemon.weight} kg
              <br />
              Altura: {pokemon.height} cm
              <br />
              Tipo(s): {pokemon.types.map(type => type.type.name).join(', ')}
            </p>
          </div>
          <Link className="btn btn-primary" to={`/`}>Regresar</Link>
        </div>
        
      ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
      )}
    </div>
  );
};

export default PokemonDetalle;
