const CARDS_MAX = 5;

let cardCount = 0;
let filteredItems = [];

export default function Items(props) {
  const { query } = props;

  filteredItems = items.filter(card => {
    return (
      cardCount >= CARDS_MAX
        ? false
        : card.name.toLowerCase().includes(query.text.toLowerCase())
    )
  })

  return (
    <div id="cards">
      {
        filteredItems.map(card => (
          <div className='card' key={card.id}>
            <div className='card-name-div'>
              <h1 className='card-name'>{card.name}</h1>
            </div>
            <div className='card-level-line'>
              <h2 className='card-level'>{card.level}</h2>
            </div>
            {/* 'if (key in card)' will return true if a key exists for that object - can use to determine how to label data for display during render (weapons vs armor vs shields etc) */}
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
  )
}

const items = [
  // weapons
  {
    name: "Justice",
    level: 20,
    base: 'Light Hammer',
    enhancement: 4,
    keen: true,
    phys: '2d8 Bludgeoning',
    ele: '1d8 Positive'
  },
  {
    name: "Voidmind Blade"
  },
  {
    name: "Light Hammer"
  },
  {
    name: "Crafted Enchanted Two-bladed Sword"
  },
  {
    name: "Crafted Silvery Scimitar"
  },
  {
    name: "Frozen Cleaver"
  },
  {
    name: "Halfling's Gift"
  },
  {
    name: "Feon's Staff of the Forest"
  },
  {
    name: "Staff of the Crashing Surf"
  },
  {
    name: "Githyanki Double Silver Sword"
  },
  {
    name: "Mighty Talon"
  },
  {
    name: "Githyanki Silver Sword"
  },
  {
    name: "House Dourden's Will"
  },
  {
    name: "Alzaara Guardian Greatsword"
  }
]