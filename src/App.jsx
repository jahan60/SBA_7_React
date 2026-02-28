import { useState, useReducer } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import MoodMaker from "./components/MoodMaker.jsx";
import weatherReducer, {
  initialState,
  actions,
} from "./reducers/weatherReducer";
import "./App.css";

function App() {
  // State for weather data (loading, error, weather info)
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // Stores the city typed by the user
  const [city, setCity] = useState("");

  // Used to move between pages
  const navigate = useNavigate();

  // Fetches weather data when the user searches
  const fetchWeather = async () => {
    if (!city) return; // Do nothing if input is empty

    // Start loading state
    dispatch({ type: actions.Fetch_Start });

    try {
      const res = await fetch(
        //paste the API_KEY Here in the URL
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY
&units=metric`,
      );
      const data = await res.json();

      if (data.cod === 404) {
        // If the city doesn't exist, show an error message
        dispatch({ type: actions.Fetch_Error, payload: "City not found" });
        return;
      }

      dispatch({ type: actions.Fetch_Success, payload: data });

      // Clear the input box after search
      setCity("");
    } catch (err) {
      dispatch({ type: actions.Fetch_Error, payload: "Network Error" });
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <nav>
        <Link to="/">Weather</Link>
        <Link to="/mood">Mood Maker</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                city={city}
                setCity={setCity}
                dispatch={dispatch}
                fetchWeather={fetchWeather}
              />

              <WeatherCard
                loading={state.loading}
                error={state.error}
                weather={state.weather}
              />
            </>
          }
        />

        <Route path="/mood" element={<MoodMaker />} />
      </Routes>
    </div>
  );
}

export default App;
