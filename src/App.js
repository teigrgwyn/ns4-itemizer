// dependencies
import { useState } from 'react';

// components
import Search from './components/Search';
// import Cards from './components/Cards';

// styles
import './App.css';

const initialQuery = {
  text: ''
}

export default function App() {
  const [query, setQuery] = useState(initialQuery);
  // const [displayCards, setDisplayCards] = useState([]);
  // const [savedCards, setSavedCards] = useState([]);

  const onQueryChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  }

  return (
    <div id="app">
      <Search query={query} onQueryChange={onQueryChange} />
      {/*<Cards displayCards={displayCards} setDisplayCards={onSetDisplayCards()} />*/}
    </div> 
  )
}