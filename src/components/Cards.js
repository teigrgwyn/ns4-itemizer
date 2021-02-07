// dependencies
import styled from 'styled-components';

const CARDS_MAX = 50;

export default function Items(props) {
  const { query } = props;

  // logic for displaying card limit up to 'CARDS_MAX'
  let cardCount = 0;
  const filteredItems = items.filter(card => {
    if (cardCount <= CARDS_MAX && card.name.toLowerCase().includes(query.text.toLowerCase())) {
      return true && cardCount++;
    }

    return false;
  })

  // logic for conditionally displaying render elements
  const conditionalKeys = {
    enhancement: false
  }

  return (
    <TopDiv id="cards">
      {
        filteredItems.map((card, index) => (
          //(card.enhancement in card) ? (<CardEnhancement>{card.enhancement}</CardEnhancement>)
          //return (
            <CardDiv key={index}>
              <CardNameContainer>
                <CardName>{card.name}</CardName>
                <CardBaseContainer>
                  <CardBase>{card.base}</CardBase>
                </CardBaseContainer>
                <CardLevel>{card.level}</CardLevel>
                <CardEnhancement>{card.enhancement}</CardEnhancement>
              </CardNameContainer>
              {/* 'if (key in card)' will return true if a key exists for that object - can use to determine how to label data for display during render (weapons vs armor vs shields etc) */}
              <CardInfo>
                <h3>Keen: {card.keen ? 'True' : 'False'}</h3>
                <h3>Damage:</h3>
                <h3>~{card.phys}</h3>
                <h3>~{card.ele}</h3>
              </CardInfo>
            </CardDiv>
          //)
        ))
      }
    </TopDiv>
  )
}

const TopDiv = styled.div `
  padding: 2vh;

  // have cards display uniformly & neatly
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardDiv = styled.div `
  margin: 1.5vh;
	
  // size of each card
	width: 185px;
	height: 273px;

	color: darkgray; // placeholder
`

const CardNameContainer = styled.div `
	margin: 2%;
  
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
  min-width: 85%;
	text-align: center;
`

const CardBaseContainer = styled.div `
  // move base to bottom of title space
  position: absolute;
  left: 50%;
  // will change depending on base font size
  transform: translate(-50%, 350%);

  // centers base to middle of line
  min-width: 100%;
  text-align: center;
`

const CardBase = styled.h2 `
  // force text area to have it's own dynamic area
  display: inline;
  padding: 2% 5%;

  background-color: #20232A;

  font-size: 0.66rem;

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
  padding-bottom: 1%;

  // will change with other styling changes often
  left: 100%;
  transform: translate(-50%, -50%);

  // centers level to middle of line; px scales equally porportional to level font size
  min-width: 16.5px;
  min-height: 16.5px;
  text-align: center;

  font-size: 0.82rem;

  // general styling
  background-color: #20232A;
  box-shadow: 0 0 3px #20232A, 0 0 5px black inset;
	border-radius: 10px;
	border: 2px solid #20232A;
`

// inherit styles from item level; only thing that changes is position
const CardEnhancement = styled(CardLevel) `
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`

const CardInfo = styled.div `
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
    base: 'Light Hammer',
    level: 20,
    enhancement: '+4',
    keen: true,
    damage: [
      {
        physical: '2d8',
        positive: '1d8'
      }
    ]
  },
  {
    name: "Voidmind Blade",
    level: 35,
    base: 'Shortsword',
    enhancement: '+7'
  },
  {
    name: "Crafted Enchanted Two-bladed Sword",
    level: 25,
    base: 'Two-Bladed Sword',
    enhancement: '+5'
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
    base: 'Two-Bladed Sword',
    enhancement: '+7'
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