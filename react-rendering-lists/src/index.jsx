import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokeUl() {
  const items = pokedex.map(pokemon => {
    return (
    <li key={pokemon.number.toString()}>{pokemon.name}</li>
    );
  });
  return (
    <ul>
      {items}
    </ul>
  );
}

root.render(<PokeUl/>);
