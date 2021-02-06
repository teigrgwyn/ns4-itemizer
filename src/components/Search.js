// dependencies
import styled from 'styled-components';

export default function Search(props) {
  const { query, onQueryChange } = props;

  return (
    <TopDiv id="query">
      <StyledInput
        name='text'
        value={query.text}
        onChange={onQueryChange}
        placeholder='search'
        spellCheck='false'
        autoComplete='off'
      />
    </TopDiv>
  )
}

const TopDiv = styled.div `
  display: flex;
  justify-content: center;

  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 2px solid #20232A;

  // allows search menu to be sticky
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #0D1117;
`

const StyledInput = styled.input `
  padding: 5px;
	background-color: #20232A;

	width: 250px;
	height: 30px;

	box-shadow: 0 0 3px #20232A, 0 0 10px black inset;
	border-radius: 10px;
	border: 2px solid #20232A;

	text-align: center;

  ::placeholder {
    color: #0D0D0D;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 3px #20232A, 0 0 7px black inset;
  }

  /* :focus::placeholder {
	  color: #20232A;
  } */
`