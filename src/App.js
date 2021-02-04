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

  filteredCards = initialCards.filter(card => !card.name.toLowerCase().indexOf(query.text.toLowerCase()));

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
      <div id="cards">
        {
          filteredCards.map(card => (
            <div className='card' key={card.name}>
              <h3>Item: {card.name}</h3>
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