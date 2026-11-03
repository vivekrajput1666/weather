type WeatherCardProps = {
temperature: number;
humidity: number;
windSpeed: number;
};

const WeatherCard = ({temperature,humidity,windSpeed,}: WeatherCardProps) => {
return ( <div className="rounded-2xl bg-zinc-900 p-6 text-white"> <h2 className="text-xl font-bold mb-4">Current Weather</h2>

  <h1 className="text-5xl font-bold mb-6">
    {temperature}°C
  </h1>

  <div className="flex justify-between">
    <p className="text-red-600">Humidity: {humidity}%</p>
    <p>Wind: {windSpeed} km/h</p>
  </div>
</div>


);
};

export default WeatherCard;
