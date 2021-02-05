// dependencies
import { useState } from 'react';

const initialCards = [
  {
    // required
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: 'Crafted Silvery Scimitar',
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
    id: 5,
    name: 'Frozen Cleaver',
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
    id: 6,
    name: "Halfling's Gift",
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
    id: 7,
    name: 'Frozen Cleaver',
    level: '20',
    type: 'Weapon',

    // optional,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludge',
    ele: '1d8 Posi'
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
              <div className='card' key={card.id}>
                <h1 className='card-name'>{card.name}</h1>
                <div className='card-level-line'>
                  <h2 className='card-level'>{card.level}</h2>
                </div>
                <div className='card-info'>
                  <h2 className='card-base'>Base: {card.base}</h2>
                  <h2 className='card-enhancement'>Enhancement: {card.enhancement}</h2>
                  <h2>Keen: {card.keen ? 'True' : 'False'}</h2>
                  <h2>Damage:</h2>
                  <h2>~{card.phys}</h2>
                  <h2>~{card.ele}</h2>
                </div>
              </div>
            ))
          }
        </div>
        {/* ========================= */} 
    </div> 
  )
}