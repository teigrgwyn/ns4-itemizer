export default function Search(props) {
  const { query, onQueryChange } = props;

  return (
    <div id="query">
      <input
        name='text'
        value={query.text}
        onChange={onQueryChange}
        placeholder='search'
        spellCheck='false'
        autoComplete='off'
      />
    </div>
  )
}