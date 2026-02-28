function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <form onSubmit={(e) =>{ e.preventDefault(); fetchWeather();

    } }>
      <input
      value={city}
      onChange={(e)=> setCity(e.target.value)}
      placeholder="Enter city"
      />
      <button type ="submit">Search</button>
  
  </form>
  );
}

export default SearchBar;