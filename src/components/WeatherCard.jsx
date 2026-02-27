function WeatherCard({ loading, error, weather }) {
  if(loading) return <p>Loading...</p>;
  if(error) return <p className="error">{}error</p>
  if(!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard