// dependencies
import { useState } from 'react';

const initialCards = [
  {
    // required
    name: 'Justice',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Crafted Enchanted Two-bladed Sword',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [1]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [2]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [2]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [3]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [3]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [4]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [4]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [5]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [5]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [6]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [6]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [7]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [7]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [8]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [8]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [9]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [9]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  },
  {
    // required
    name: 'Justice [10]',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
  },
  {
    name: 'Voidmind Blade [10]',
    level: '35',
    type: 'Weapon',

    base: 'Shortsword',
    enhancement: 7,
    keen: true,
    phys: '2d12 Pierce',
    ele: '1d8 Acid, 1d4 Nega'
  }
]

let filteredCards = [];

const initialQuery = {
  text: ''
}

export default function App() {
  const [query, setQuery] = useState(initialQuery);
  // const [displayCards] = useState(initialCards);
  // const [savedCards, setSavedCards] = useState([]);

  const onQueryChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  }

  // recompiles cardstack every render
  filteredCards = initialCards.filter(card => card.name.toLowerCase().includes(query.text.toLowerCase()));

  return (
    <div id="app">
      {/* ========================= */}
      <div id="query">
        <input
          name='text'
          value={query.text}
          onChange={onQueryChange}
          placeholder='search'
          spellCheck='false'
          autoComplete='off'
        />
      </div>
      {/* ========================= */}
      <div id="padding" />
      {/* ========================= */}
      <div id="cards">
        {
          filteredCards.map(card => (
            <div className='card' key={card.name}>
              <h3>{card.name}</h3>
              <h4>Level: {card.level}</h4>
              <h4>Base: {card.base}</h4>
              <h4>Enhancement: {card.enhancement}</h4>
              <h4>Keen: {card.keen ? 'True' : 'False'}</h4>
              <h4>Damage:</h4>
              <h4>~{card.phys}</h4>
              <h4>~{card.ele}</h4>
            </div>
          ))
        }
      </div>
      {/* ========================= */} 
    </div> 
  )
}