import {Sun, CloudSun, CloudFog, CloudDrizzle, CloudRain, Snowflake, CloudLightning} from "lucide-react";
import {getcondition} from "../utils/weatherCodes";

const icons: any = {
  sun: Sun,
  "cloud-sun": CloudSun,
  "cloud-fog": CloudFog,
  "cloud-drizzle": CloudDrizzle,
  "cloud-rain": CloudRain,
  snowflake: Snowflake,
  "cloud-lightning": CloudLightning,
};

type WeatherCardProps = {
temperature: number;
humidity: number;
windSpeed: number;
weatherCode: number;
};

const WeatherCard  = ({temperature,humidity,windSpeed,weatherCode}: WeatherCardProps) => {
    const {label , icon} = getcondition(weatherCode);
    const Icon = icons[icon];
return ( <div className="rounded-2xl bg-zinc-900 p-6 text-white"> <h2 className="text-xl font-bold mb-4">Current Weather</h2>

  <h1 className="text-5xl font-bold mb-6">
    {temperature}°c
  </h1>
 <div className="flex flex-col items-center text-amber-400">
          <Icon size={48} />
          <p className="text-sm text-white mt-1">{label}</p>
        </div>
  <div className="flex justify-between">
    <p className="text-red-600">Humidity: {humidity}%</p>
    <p>Wind: {windSpeed} km/h</p>
  </div>
</div>


);
};

export default WeatherCard;
