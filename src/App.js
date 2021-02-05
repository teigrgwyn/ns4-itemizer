// dependencies
import { useState } from 'react';

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
    <div id="app">
      <Search query={query} onQueryChange={onQueryChange} />
      <div style={{ marginBottom: '2%' }} />
      <Items query={query} />
    </div> 
  )
}