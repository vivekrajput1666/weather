import { useState } from "react";
import { Search, MapPin, CloudSun } from "lucide-react";
import WeatherCard from "./components/WeatherCard";
import { getCoordinates, getWeather } from "./api/weatherApi";

function App() {
  const [city, setCity] = useState("Jammu");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");
      const { latitude, longitude } = await getCoordinates(city);
      const data = await getWeather(latitude, longitude);
      console.log(data); // check the shape of your backend response
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather. Check the city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <CloudSun size={35} className="text-amber-400" />
          <h1 className="text-2xl font-bold ">Weather App</h1>
        </div>

        <div className="flex gap-2 mb-10">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 p-4 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-amber-500 text-black px-5 rounded-xl"
          >
            <Search />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-5 text-zinc-400">
          <MapPin size={18} />
          <p>{city}</p>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}

       {weather && (
  <WeatherCard
    temperature={weather.data.current.temperature_2m}
    humidity={weather.data.current.relative_humidity_2m}
    windSpeed={weather.data.current.wind_speed_10m}
  />
)}
      </div>
    </div>
  );
}

export default App;