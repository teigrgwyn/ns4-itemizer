// dependencies
import { useState } from 'react';

// components
import Search from './components/Search';
import Cards from './components/Cards';

// styles
import './App.css';

/*
  Theme:
    Bluish: #20232A
    Dark Gray: #181A1B
*/

export default function App() {
  const [query, setQuery] = useState('');
  const [displayCards, setDisplayCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);

  return (
    <div id="app">
      <Search query={query} setQuery={} />
      <Cards displayCards={displayCards} setDisplayCards={} />
    </div> 
  )
}