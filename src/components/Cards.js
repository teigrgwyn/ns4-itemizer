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
              <CardBaseContainer>
                <CardBase className='card-base'>{card.base}</CardBase>
              </CardBaseContainer>
              <CardLevel className='card-level'>{card.level}</CardLevel>
            </CardNameContainer>
            {/* 'if (key in card)' will return true if a key exists for that object - can use to determine how to label data for display during render (weapons vs armor vs shields etc) */}
            <CardInfo className='card-info'>
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

  // have cards display uniformly & neatly
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardDiv = styled.div `
  margin: 1%;
	
  // size of each card
	width: 170px;
	height: 250px;

	color: darkgray; // placeholder
`

const CardNameContainer = styled.div `
	margin: 2.5%;
  
  // allow all card properties to be displayed over the card name
  overflow: inset hidden;
  
  // required for card name to display properly due to text transforms
  position: relative;

  // force all card names to consume 2 lines of text
	height: 48px;

  // general styling
  background-color: #20232A;
  box-shadow: 0 0 3px #20232A, 0 0 10px black inset;
	border-radius: 10px;
	border: 2px solid #20232A;
`

const CardName = styled.h1 `
	// allows single-line titles to be properly vertically-spaced
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	// centers title to middle of line
  min-width: 90%;
	text-align: center;
`

const CardBaseContainer = styled.div `
  // move base to bottom of title space
  position: absolute;
  left: 50%;
  // will change depending on base font size
  transform: translate(-50%, 400%);

  // centers base to middle of line
  min-width: 100%;
  text-align: center;
`

const CardBase = styled.h2 `
  // force text area to have it's own dynamic area
  display: inline;
  padding: 2% 5%;

  background-color: #20232A;

  font-size: 0.6rem;

  // general styling
  background-color: #20232A;
  box-shadow: 0 0 3px #20232A, 0 0 4px black inset;
	border-radius: 9px;
	border: 2px solid #20232A;
`

const CardLevel = styled.h3 `
  // move level to upper-right of title space
  position: absolute;
  // force text to have it's own dynamic area
  padding: 2%;
  padding-bottom: 1.5%;

  // will change with other styling changes often
  left: 100%;
  transform: translate(-50%, -50%);

  // centers level to middle of line; px scales equally porportional to level font size
  min-width: 15px;
  min-height: 15px;
  text-align: center;

  font-size: 0.75rem;

  // general styling
  background-color: #20232A;
  box-shadow: 0 0 3px #20232A, 0 0 5px black inset;
	border-radius: 9px;
	border: 2px solid #20232A;
`

const CardInfo = styled.h3 `
	margin: 2.5%;
  padding: 5%;

  // hack to make info-box not exceed parent dimensions; 'box-sizing: border-box' doesn't work; may mess with card info styling if there's a lot of content to display
  height: 65%;

  display: flex;
  flex-direction: column;

  // general styling
  background-color: #20232A;
  box-shadow: 0 0 3px #20232A, 0 0 10px black inset;
	border-radius: 10px;
	border: 2px solid #20232A;
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
    name: "Voidmind Blade",
    level: 1,
    base: 'Shortsword'
  },
  {
    name: "Crafted Enchanted Two-bladed Sword",
    level: 25,
    base: 'Two-Bladed Sword'
  },
  {
    name: "Crafted Silvery Scimitar",
    level: 20,
    base: 'Scimitar'
  },
  {
    name: "Frozen Cleaver",
    level: 20,
    base: 'Scimitar'
  },
  {
    name: "Halfling's Gift",
    level: 5,
    base: 'Shortbow'
  },
  {
    name: "Feon's Staff of the Forest",
    level: 16,
    base: 'Quarterstaff'
  },
  {
    name: "Staff of the Crashing Surf",
    level: 25,
    base: 'Quarterstaff'
  },
  {
    name: "Githyanki Double Silver Sword",
    level: 40,
    base: 'Two-Bladed Sword'
  },
  {
    name: "Mighty Talon",
    level: 40,
    base: 'Greatsword'
  },
  {
    name: "Githyanki Silver Sword",
    level: 40,
    base: 'Greatsword'
  },
  {
    name: "House Dourden's Will",
    level: 13,
    base: 'Greatsword'
  },
  {
    name: "Alzaara Guardian Greatsword",
    level: 25,
    base: 'Greatsword'
  }
]