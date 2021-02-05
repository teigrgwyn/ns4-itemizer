/*
  Theme:
    Bluish: #20232A
    Dark Bluish: #0D1117
		Dark Gray: #181A1B
		Near Black: #0D0D0D
*/

// dependencies
import { useState } from 'react';
import styled from 'styled-components';

// components
import Search from './components/Search';
import Items from './components/Cards';

export default function App() {
  const [query, setQuery] = useState({ text: '' });
  // const [savedCards, setSavedCards] = useState([]);

  const onQueryChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  }

  return (
    <TopDiv id="app">
      <Search query={query} onQueryChange={onQueryChange} />
      <Items query={query} />
    </TopDiv> 
  )
}

const TopDiv = styled.div `
  display: flex;
  flex-direction: column;
`