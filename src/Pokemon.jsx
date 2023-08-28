import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pokemon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Pokémon List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((item, index) => (
          <div key={index} style={{ width: '25%', padding: '10px' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
              <h3>{item.name}</h3>
              <Link className="btn btn-primary" to={`/pokemon/${index + 1}`}>Ver detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
