// dependencies
// import { useState } from 'react';

export default function Search(props) {
  const { query, onQueryChange } = props;

  const test = event => {
    event.preventDefault();
  }

  return (
    <div id="search">
      <form>
        <input onSubmit={test}
          placeholder='search'
          name='text'
          value={query.text}
          onChange={onQueryChange}
        />
      </form>
    </div> 
  )
}