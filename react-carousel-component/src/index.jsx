import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const images = [
  {
    name: 'pikachu',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    id: 1
  },
  {
    name: 'squirtle',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    id: 2
  },
  {
    name: 'charmander',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    id: 3
  }
];

root.render(<Carousel images={images}/>);
