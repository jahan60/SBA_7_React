import { useNavigate } from "react-router-dom";

function WeatherCard({ loading, error, weather }) {
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!weather) return null;

  //choose a mood based on temperature
  let mood = "calm";
  if (weather.main.temp > 25) mood = "energetic";
  if (weather.main.temp < 10) mood = "sad";

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>

      <button
        onClick={() =>
          navigate("/mood", { state: { mood } })
        }
      >
        Show Mood
      </button>
    </div>
  );
}

export default WeatherCard;