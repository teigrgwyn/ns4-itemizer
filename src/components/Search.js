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

  padding-bottom: 2%;
  /*border-top: 4px dotted #20232A;*/
  border-bottom: 2px solid #20232A;
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