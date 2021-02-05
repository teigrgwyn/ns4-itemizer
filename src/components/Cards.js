// dependencies
import styled from 'styled-components';

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
    <TopDiv id="cards">
      {
        filteredItems.map(card => (
          <CardDiv className='card' key={card.id}>
            <CardNameContainer className='card-name-div'>
              <CardName className='card-name'>{card.name}</CardName>
            </CardNameContainer>
            <CardLevelContainer className='card-level-line'>
              <CardLevel className='card-level'>{card.level}</CardLevel>
            </CardLevelContainer>
            {/* 'if (key in card)' will return true if a key exists for that object - can use to determine how to label data for display during render (weapons vs armor vs shields etc) */}
            <CardInfo className='card-info'>
              <h2 className='card-base'>Base: {card.base}</h2>
              <h2 className='card-enhancement'>Enhancement: {card.enhancement}</h2>
              <h2>Keen: {card.keen ? 'True' : 'False'}</h2>
              <h2>Damage:</h2>
              <h2>~{card.phys}</h2>
              <h2>~{card.ele}</h2>
            </CardInfo>
          </CardDiv>
        ))
      }
    </TopDiv>
  )
}

const TopDiv = styled.div `
  padding: 1%;

  /* have cards display uniformly & neatly */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardDiv = styled.div `
  margin: 1%;
	
  /* size of each card */
	width: 150px;
	height: 200px;

	color: darkgray; // placeholder
	border: 1px solid crimson; // placeholder
`

const CardNameContainer = styled.div `
	margin: 2.5%;

  // required for card name to display properly due to text transforms
  position: relative;

  /* force all card names to consume 2 lines of text */
	height: 48px;

	border: 1px solid white; // placeholder
`

const CardName = styled.h1 `
  /* prevents text-squishing on x-transform */
  min-width: 100%;
	
	/* allows single-line titles to be properly vertically-spaced too */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	/* centers text to middle of line */
	text-align: center;
`

// could remove container and use transform on level itself, unless it's like the name container and needs a relative parent and absolute child to transform properly
const CardLevelContainer = styled.div `
  // center level in container to make easier to manipulate later
  display: flex;
  justify-content: center;

	border: 1px solid blueviolet; // placeholder
`

const CardLevel = styled.h2 `
	border: 1px solid yellow;
`

const CardInfo = styled.h2 `
	margin: 2.5%;

  display: flex;
  flex-direction: column;

  border: 1px solid crimson;
`

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